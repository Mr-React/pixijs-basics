let app;
let player;
let bullets = [];
let bulletSpeed = 10;

window.onload = function () {
  // Application setup
  app = new PIXI.Application({
    width: 800,
    height: 600,
    background: 0xaaaaaa,
  });

  document.querySelector("#gameDiv").appendChild(app.view);
  app.stage.interactive = true;
  document
    .querySelector("#gameDiv")
    .addEventListener("pointerdown", fireBullet);

  // Player Object
  player = PIXI.Sprite.from("/images/player.png");
  player.anchor.set(0.5);
  player.x = app.view.width / 2;
  player.y = app.view.height / 2;

  app.stage.addChild(player);

  app.ticker.add(gameLoop);
};

function fireBullet(e) {
  console.log("FIRE!!");

  let bullet = createBullet();
  bullets.push(bullet);
}

function updateBullets(delta) {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].position.y -= bullets[i].speed;

    if (bullets[i].position.y < 0) {
      bullets[i].dead = true;
    }
  }

  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].dead) {
      app.stage.removeChild(bullets[i]);
      bullets.splice(i, 1);
    }
  }
}

function gameLoop(delta) {
  updateBullets(delta);
}

function createBullet() {
  let bullet = PIXI.Sprite.from("/images/bullet.png");
  bullet.anchor.set(0.5);
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.speed = bulletSpeed;
  app.stage.addChild(bullet);

  return bullet;
}
