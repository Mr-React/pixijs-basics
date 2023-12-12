let app;
let text1;

window.onload = function () {
  // Application setup
  app = new PIXI.Application({
    width: 800,
    height: 600,
    background: 0xaaaaaa,
  });

  document.body.appendChild(app.view);

  PIXI.Assets.addBundle("fonts", {
    Arcade: "/fonts/ARCADECLASSIC.TTF",
  });

  PIXI.Assets.loadBundle("fonts").then(() => {
    text1 = new PIXI.Text("Welcome to Your Doom");

    text1.x = app.view.width / 2;
    text1.y = app.view.height / 2;
    text1.anchor.set(0.5);
    text1.style = new PIXI.TextStyle({
      fill: 0xff0000,
      fontSize: 40,
      fontFamily: "Arcade",
    });

    app.stage.addChild(text1);
  });
};
