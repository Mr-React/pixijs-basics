let app;
let player;
let keys = {};
let keysDiv;

window.onload = function () {
  // Application setup
  app = new PIXI.Application({
    width: 800,
    height: 600,
    background: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  // Player Object
  player = PIXI.Sprite.from("/images/player.png");
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;
  app.stage.addChild(player);

  // mouse interactions
  app.stage.interactive = true;
  app.stage.on("pointermove", movePlayer);

  // Keyboard interactions
  window.addEventListener("keydown", keysDown);
  window.addEventListener("keyup", keysUp);

  // ticker
  app.ticker.add(gameLoop);
  keysDiv = document.querySelector("#keys");
};

function movePlayer(e) {
  let pos = e.data.global;
  console.log(pos);

  player.x = pos.x;
  player.y = pos.y;
}

function keysDown(e) {
  keys[e.keyCode] = true;
}

function keysUp(e) {
  keys[e.keyCode] = false;
}

function gameLoop() {
  keysDiv.innerHTML = JSON.stringify(keys);

  // W & up arrow
  if (keys["87"] || keys["38"]) {
    console.log("W");
    player.y = player.y - 5;
  }

  // S & down arrow
  if (keys["83"] || keys["40"]) {
    console.log("S");
    player.y = player.y + 5;
  }

  // A & left arrow
  if (keys["65"] || keys["37"]) {
    console.log("A");
    player.x = player.x - 5;
  }

  // D & right arrow
  if (keys["68"] || keys["39"]) {
    console.log("D");
    player.x = player.x + 5;
  }
}
