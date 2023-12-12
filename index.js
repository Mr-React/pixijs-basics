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

  // preload assets
  let baseUrl = "/images/";
  //app.loader.add("sprite01", baseUrl + "bloat01.png");

  let assetPaths = [];
  for (let i = 1; i < 10; i++) {
    const alias = "sprite0" + i;
    PIXI.Assets.add(alias, baseUrl + "bloat0" + i + ".png");
    assetPaths.push(alias);
  }
  PIXI.Assets.add("sprite10", baseUrl + "bloat10.png");
  PIXI.Assets.add("player", baseUrl + "player.png");
  assetPaths.push("sprite10");
  assetPaths.push("player");

  const texturesPromise = PIXI.Assets.load(assetPaths);

  texturesPromise.then((textures) => {
    // create a new Sprite from the resolved loaded Textures

    const sprite01 = PIXI.Sprite.from(textures.sprite01);

    sprite01.anchor.set(0.5);
    sprite01.x = app.screen.width * 0.25;
    sprite01.y = app.screen.height / 2;
    app.stage.addChild(sprite01);

    const sprite02 = PIXI.Sprite.from(textures.sprite02);

    sprite02.anchor.set(0.5);
    sprite02.x = app.screen.width * 0.75;
    sprite02.y = app.screen.height / 2;
    app.stage.addChild(sprite02);
  });
};
