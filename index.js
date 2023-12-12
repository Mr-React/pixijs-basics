let app;

window.onload = function () {
  app = new PIXI.Application({
    width: 800,
    height: 600,
    background: 0xaaaaaa,
  });

  document.body.appendChild(app.view);
};
