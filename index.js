let app;
let player;
let enemy;
let speed = 4;

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
  player.x = 16;
  player.y = app.view.height / 2;
  app.stage.addChild(player);

  // Enemy Object
  enemy = PIXI.Sprite.from("/images/player.png");
  enemy.anchor.set(0.5);
  enemy.x = app.view.width - 16;
  enemy.y = app.view.height / 2;
  app.stage.addChild(enemy);

  app.ticker.add(gameLoop);
};

function gameLoop(delta) {
  player.x += speed;
  enemy.x -= speed;

  if (rectsIntersect(player, enemy)) {
    speed = 0;
  }
}

function rectsIntersect(a, b) {
  let aBox = a.getBounds();
  let bBox = b.getBounds();

  return (
    aBox.x + aBox.width > bBox.x &&
    aBox.x < bBox.x + bBox.width &&
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.y + bBox.height
  );
}
