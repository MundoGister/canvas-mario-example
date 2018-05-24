function Game(canvasElement) {
  this.ctx = canvasElement.getContext("2d");

  this.background = new Background(this.ctx);
  this.player = new Player(this.ctx);

  this.interval = null;
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
    this.clear();
    this.moveAll();
    this.draw();
  }.bind(this), 16);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};