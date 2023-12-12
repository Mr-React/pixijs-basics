let app;
let player;

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

  //mouse interactions
  app.stage.interactive = true;
  app.stage.on("pointermove", movePlayer);
};

function movePlayer(e) {
  let pos = e.data.global;
  console.log(pos);

  player.x = pos.x;
  player.y = pos.y;
}
