// The play state
var playState = {
  // Automatically called
  preload: function() {
    // Set up input
    ready = true;
    loaded = false;
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    if (landscape) {
      upKey.onDown.add(moveNorth, this);
      downKey.onDown.add(moveSouth, this);
      leftKey.onDown.add(moveWest, this);
      rightKey.onDown.add(moveEast, this);
    } else {
      upKey.onDown.add(moveEast, this);
      downKey.onDown.add(moveWest, this);
      leftKey.onDown.add(moveNorth, this);
      rightKey.onDown.add(moveSouth, this);
    }
    spaceKey.onDown.add(spaceProcess, this);
    startX = 0;
    startY = 0;
    endX = 0;
    endY = 0;
    game.input.onDown.add(startSwipe, this);
  },
  // Automatically called
  create: function() {
    loadLevel();
    this.camera.flash('#DDDDDD', 500, true);
    minDimension = Math.min(game.width, game.height);
    resetButton = game.add.button(game.width * 0.5, game.height * 0.925, 'Reset', resetProcess, this);
    resetButton.anchor.setTo(0.5, 0.5);
    resetButton.width = resetButton.height = minDimension * 0.075;
    nextButton = game.add.button(game.width * 0.9, game.height * 0.925, 'Next', nextProcess, this);
    nextButton.anchor.setTo(0.5, 0.5);
    nextButton.width = nextButton.height = minDimension * 0.075;
    previousButton = game.add.button(game.width * 0.1, game.height * 0.925, 'Previous', previousProcess, this);
    previousButton.anchor.setTo(0.5, 0.5);
    previousButton.width = previousButton.height = minDimension * 0.075;
    winSound = game.add.audio("Win");
    goalSound = game.add.audio("Goal");
    zapOnSound = game.add.audio("ZapOn");
    zapOffSound = game.add.audio("ZapOff");
    zapOffSound.volume = 0.6;
    portalSound = game.add.audio("Portal");
    setTimeout(setLoaded, 500);
  },
  // Called every frame
  update: function() {
  }
}

function moveNorth() {
  if (ready) {
    ready = false;
    setTimeout(setReady, 200);
    replicaList.sort(function(a, b){return b.row-a.row});
    for (i = replicaList.length - 1; i >= 0; i--) {
      if (!replicaList[i].finished) {
        var row = replicaList[i].row;
        var col = replicaList[i].col;
        if (row - 1 >= 0) {
          if (floorList[levelIndex][row][col].includes('N') && floorList[levelIndex][row-1][col].includes('S')) {
            var occupied = false;
            for (j = replicaList.length - 1; j >= 0; j--) {
              if (replicaList[j] !== replicaList[i]) {
                if ((replicaList[j].row === row - 1) && (replicaList[j].col === col)) {
                  occupied = true;
                  break;
                }
              }
            }
            for (j = blockedList.length - 1; j >= 0; j--) {
              if ((blockedList[j].row === row - 1) && (blockedList[j].col === col)) {
                occupied = true;
                break;
              }
            }
            if (!occupied) {
              replicaList[i].move('N');
              if (replicaList[i]) {
                for (j = zapOnList.length - 1; j >= 0; j--) {
                  if ((zapOnList[j].row === replicaList[i].row) && (zapOnList[j].col === replicaList[i].col)) {
                    game.add.tween(replicaList[i].sprite).to({alpha: 0.5}, 500, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(replicaList[i].sprite).to({width: 0, height: 0}, 500, Phaser.Easing.Exponential.In, true, 700);
                    replicaList.splice(i, 1);
                    setTimeout(function() {
                      zapOnSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = portalList.length - 1; j >= 0; j--) {
                  if ((portalList[j].row === replicaList[i].row) && (portalList[j].col === replicaList[i].col)) {
                    teleport(replicaList, portalList, i, j);
                    setTimeout(function() {
                      portalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = zapOffList.length - 1; j >= 0; j--) {
                  if ((zapOffList[j].row === replicaList[i].row) && (zapOffList[j].col === replicaList[i].col)) {
                    // Create new zapOn and remove zapOff
                    var zapOn = new Item(zapOffList[j].x, zapOffList[j].y, zapOffList[j].col, zapOffList[j].row, zapOffList[j].width, zapOffList[j].height, 'Z');
                    zapOnList.push(zapOn);
                    zapOn.show();
                    game.add.tween(zapOn.sprite).from({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(zapOffList[j].sprite).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    zapOffList.splice(j, 1);
                    setTimeout(function() {
                      zapOffSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = goalList.length - 1; j >= 0; j--) {
                  if ((goalList[j].row === replicaList[i].row) && (goalList[j].col === replicaList[i].col)) {
                    blockedList.push({row: goalList[j].row, col: goalList[j].col});
                    game.add.tween(goalList[j].sprite).to({width: goalList[j].width * 1.5, height: goalList[j].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    goalList.splice(j, 1);
                    game.add.tween(replicaList[i].sprite).to({width: replicaList[i].width * 1.5, height: replicaList[i].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    replicaList[i].finished = true;
                    setTimeout(function() {
                      goalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function moveSouth() {
  if (ready) {
    ready = false;
    setTimeout(setReady, 200);
    replicaList.sort(function(a, b){return a.row-b.row});
    for (i = replicaList.length - 1; i >= 0; i--) {
      if (!replicaList[i].finished) {
        var row = replicaList[i].row;
        var col = replicaList[i].col;
        if (row + 1 < floorList[levelIndex].length) {
          if (floorList[levelIndex][row][col].includes('S') && floorList[levelIndex][row+1][col].includes('N')) {
            var occupied = false;
            for (j = replicaList.length - 1; j >= 0; j--) {
              if (replicaList[j] !== replicaList[i]) {
                if ((replicaList[j].row === row + 1) && (replicaList[j].col === col)) {
                  occupied = true;
                  break;
                }
              }
            }
            for (j = blockedList.length - 1; j >= 0; j--) {
              if ((blockedList[j].row === row + 1) && (blockedList[j].col === col)) {
                occupied = true;
                break;
              }
            }
            if (!occupied) {
              replicaList[i].move('S');
              if (replicaList[i]) {
                for (j = zapOnList.length - 1; j >= 0; j--) {
                  if ((zapOnList[j].row === replicaList[i].row) && (zapOnList[j].col === replicaList[i].col)) {
                    game.add.tween(replicaList[i].sprite).to({alpha: 0.5}, 500, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(replicaList[i].sprite).to({width: 0, height: 0}, 500, Phaser.Easing.Exponential.In, true, 700);
                    replicaList.splice(i, 1);
                    setTimeout(function() {
                      zapOnSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = portalList.length - 1; j >= 0; j--) {
                  if ((portalList[j].row === replicaList[i].row) && (portalList[j].col === replicaList[i].col)) {
                    teleport(replicaList, portalList, i, j);
                    setTimeout(function() {
                      portalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = zapOffList.length - 1; j >= 0; j--) {
                  if ((zapOffList[j].row === replicaList[i].row) && (zapOffList[j].col === replicaList[i].col)) {
                    // Create new zapOn and remove zapOff
                    var zapOn = new Item(zapOffList[j].x, zapOffList[j].y, zapOffList[j].col, zapOffList[j].row, zapOffList[j].width, zapOffList[j].height, 'Z');
                    zapOnList.push(zapOn);
                    zapOn.show();
                    game.add.tween(zapOn.sprite).from({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(zapOffList[j].sprite).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    zapOffList.splice(j, 1);
                    setTimeout(function() {
                      zapOffSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = goalList.length - 1; j >= 0; j--) {
                  if ((goalList[j].row === replicaList[i].row) && (goalList[j].col === replicaList[i].col)) {
                    blockedList.push({row: goalList[j].row, col: goalList[j].col});
                    game.add.tween(goalList[j].sprite).to({width: goalList[j].width * 1.5, height: goalList[j].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    goalList.splice(j, 1);
                    game.add.tween(replicaList[i].sprite).to({width: replicaList[i].width * 1.5, height: replicaList[i].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    replicaList[i].finished = true;
                    setTimeout(function() {
                      goalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function moveWest() {
  if (ready) {
    ready = false;
    setTimeout(setReady, 200);
    replicaList.sort(function(a, b){return b.col-a.col});
    for (i = replicaList.length - 1; i >= 0; i--) {
      if (!replicaList[i].finished) {
        var row = replicaList[i].row;
        var col = replicaList[i].col;
        if (col - 1 >= 0) {
          if (floorList[levelIndex][row][col].includes('W') && floorList[levelIndex][row][col-1].includes('E')) {
            var occupied = false;
            for (j = replicaList.length - 1; j >= 0; j--) {
              if (replicaList[j] !== replicaList[i]) {
                if ((replicaList[j].row === row) && (replicaList[j].col === col - 1)) {
                  occupied = true;
                  break;
                }
              }
            }
            for (j = blockedList.length - 1; j >= 0; j--) {
              if ((blockedList[j].row === row) && (blockedList[j].col === col - 1)) {
                occupied = true;
                break;
              }
            }
            if (!occupied) {
              replicaList[i].move('W');
              if (replicaList[i]) {
                for (j = zapOnList.length - 1; j >= 0; j--) {
                  if ((zapOnList[j].row === replicaList[i].row) && (zapOnList[j].col === replicaList[i].col)) {
                    game.add.tween(replicaList[i].sprite).to({alpha: 0.5}, 500, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(replicaList[i].sprite).to({width: 0, height: 0}, 500, Phaser.Easing.Exponential.In, true, 700);
                    replicaList.splice(i, 1);
                    setTimeout(function() {
                      zapOnSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = portalList.length - 1; j >= 0; j--) {
                  if ((portalList[j].row === replicaList[i].row) && (portalList[j].col === replicaList[i].col)) {
                    teleport(replicaList, portalList, i, j);
                    setTimeout(function() {
                      portalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = zapOffList.length - 1; j >= 0; j--) {
                  if ((zapOffList[j].row === replicaList[i].row) && (zapOffList[j].col === replicaList[i].col)) {
                    // Create new zapOn and remove zapOff
                    var zapOn = new Item(zapOffList[j].x, zapOffList[j].y, zapOffList[j].col, zapOffList[j].row, zapOffList[j].width, zapOffList[j].height, 'Z');
                    zapOnList.push(zapOn);
                    zapOn.show();
                    game.add.tween(zapOn.sprite).from({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(zapOffList[j].sprite).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    zapOffList.splice(j, 1);
                    setTimeout(function() {
                      zapOffSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = goalList.length - 1; j >= 0; j--) {
                  if ((goalList[j].row === replicaList[i].row) && (goalList[j].col === replicaList[i].col)) {
                    blockedList.push({row: goalList[j].row, col: goalList[j].col});
                    game.add.tween(goalList[j].sprite).to({width: goalList[j].width * 1.5, height: goalList[j].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    goalList.splice(j, 1);
                    game.add.tween(replicaList[i].sprite).to({width: replicaList[i].width * 1.5, height: replicaList[i].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    replicaList[i].finished = true;
                    setTimeout(function() {
                      goalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function moveEast() {
  if (ready) {
    ready = false;
    setTimeout(setReady, 200);
    replicaList.sort(function(a, b){return a.col-b.col});
    for (i = replicaList.length - 1; i >= 0; i--) {
      if (!replicaList[i].finished) {
        var row = replicaList[i].row;
        var col = replicaList[i].col;
        if (col + 1 < floorList[levelIndex][0].length) {
          if (floorList[levelIndex][row][col].includes('E') && floorList[levelIndex][row][col+1].includes('W')) {
            var occupied = false;
            for (j = replicaList.length - 1; j >= 0; j--) {
              if (replicaList[j] !== replicaList[i]) {
                if ((replicaList[j].row === row) && (replicaList[j].col === col + 1)) {
                  occupied = true;
                  break;
                }
              }
            }
            for (j = blockedList.length - 1; j >= 0; j--) {
              if ((blockedList[j].row === row) && (blockedList[j].col === col + 1)) {
                occupied = true;
                break;
              }
            }
            if (!occupied) {
              replicaList[i].move('E');
              if (replicaList[i]) {
                for (j = zapOnList.length - 1; j >= 0; j--) {
                  if ((zapOnList[j].row === replicaList[i].row) && (zapOnList[j].col === replicaList[i].col)) {
                    game.add.tween(replicaList[i].sprite).to({alpha: 0.5}, 500, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(replicaList[i].sprite).to({width: 0, height: 0}, 500, Phaser.Easing.Exponential.In, true, 700);
                    replicaList.splice(i, 1);
                    setTimeout(function() {
                      zapOnSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = portalList.length - 1; j >= 0; j--) {
                  if ((portalList[j].row === replicaList[i].row) && (portalList[j].col === replicaList[i].col)) {
                    teleport(replicaList, portalList, i, j);
                    setTimeout(function() {
                      portalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = zapOffList.length - 1; j >= 0; j--) {
                  if ((zapOffList[j].row === replicaList[i].row) && (zapOffList[j].col === replicaList[i].col)) {
                    // Create new zapOn and remove zapOff
                    var zapOn = new Item(zapOffList[j].x, zapOffList[j].y, zapOffList[j].col, zapOffList[j].row, zapOffList[j].width, zapOffList[j].height, 'Z');
                    zapOnList.push(zapOn);
                    zapOn.show();
                    game.add.tween(zapOn.sprite).from({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    game.add.tween(zapOffList[j].sprite).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true, 200);
                    zapOffList.splice(j, 1);
                    setTimeout(function() {
                      zapOffSound.play();
                    }, 200);
                    break;
                  }
                }
              }
              if (replicaList[i]) {
                for (j = goalList.length - 1; j >= 0; j--) {
                  if ((goalList[j].row === replicaList[i].row) && (goalList[j].col === replicaList[i].col)) {
                    blockedList.push({row: goalList[j].row, col: goalList[j].col});
                    game.add.tween(goalList[j].sprite).to({width: goalList[j].width * 1.5, height: goalList[j].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    goalList.splice(j, 1);
                    game.add.tween(replicaList[i].sprite).to({width: replicaList[i].width * 1.5, height: replicaList[i].height * 1.5}, 1000, Phaser.Easing.Elastic.Out, true, 200);
                    replicaList[i].finished = true;
                    setTimeout(function() {
                      goalSound.play();
                    }, 200);
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function teleport(rList, pList, m, n) {
  setTimeout(function() {
    // Teleport from one portal to other portal
    rList[m].row = pList[(n+1)%2].row;
    rList[m].col = pList[(n+1)%2].col;
    rList[m].x = pList[(n+1)%2].x;
    rList[m].y = pList[(n+1)%2].y;
    rList[m].sprite.x = pList[(n+1)%2].sprite.x;
    rList[m].sprite.y = pList[(n+1)%2].sprite.y;
    game.add.tween(pList[0].sprite).to({width: pList[0].width * 1.5, height: pList[0].height * 1.5}, 1000, Phaser.Easing.Exponential.Out, true);
    game.add.tween(pList[1].sprite).to({width: pList[1].width * 1.5, height: pList[1].height * 1.5}, 1000, Phaser.Easing.Exponential.Out, true);
    game.add.tween(pList[0].sprite).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
    game.add.tween(pList[1].sprite).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true);
    pList.length = 0;
  }, 200);
}

function spaceProcess() {
  if (goalList.length <= 0) {
    nextProcess();
  } else {
    resetProcess();
  }
}

function resetProcess() {
  if (loaded) {
    if (goalList.length <= 0) {
      winSound.play();
      loaded = false;
      completionList[levelIndex] = true;
    }
    playState.camera.fade('#646464', 500, true);
    setTimeout(function() {
      setReady();
      resetLevel();
    }, 500);
  }
}

function nextProcess() {
  if (loaded) {
    if ((goalList.length <= 0) || completionList[levelIndex]) {
      winSound.play();
      loaded = false;
      playState.camera.fade('#646464', 500, true);
      setTimeout(function() {
        completionList[levelIndex] = true;
        setReady();
        nextLevel();
        resetLevel();
      }, 500);
    }
  }
}

function previousProcess() {
  if (loaded) {
    if (levelIndex > 0) {
      winSound.play();
      loaded = false;
      playState.camera.fade('#646464', 500, true);
      setTimeout(function() {
        setReady();
        previousLevel();
        resetLevel();
      }, 500);
    }
  }
}

function setReady() {
  ready = true;
}

function setLoaded() {
  loaded = true;
}

function startSwipe() {
  startX = game.input.worldX;
  startY = game.input.worldY;
  game.input.onDown.remove(startSwipe);
  game.input.onUp.add(endSwipe);
}

function endSwipe() {
  endX = game.input.worldX;
  endY = game.input.worldY;
  var distX = endX - startX;
  var distY = endY - startY;

  if (Math.abs(distX) > (Math.abs(distY) * 2) && Math.abs(distX) > (game.width / 20)) {
    if (landscape) {
      if (distX > 0) {
        moveEast();
      } else {
        moveWest();
      }
    } else {
      if (distX > 0) {
        moveSouth();
      } else {
        moveNorth();
      }
    }
  }

  if (Math.abs(distY) > (Math.abs(distX) * 2) && Math.abs(distY) > (game.height / 20)) {
    if (landscape) {
      if (distY > 0) {
        moveSouth();
      } else {
        moveNorth();
      }
    } else {
      if (distY > 0) {
        moveWest();
      } else {
        moveEast();
      }
    }
  }

  game.input.onDown.add(startSwipe);
  game.input.onUp.remove(endSwipe);
}
