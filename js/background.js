function Background(ctx) {
  this.ctx = ctx;

  this.x = 0;
  this.y = 0;

  this.vx = -3;

  this.img = new Image();
  this.img.src = 'img/bg.png';
}

Background.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.ctx.canvas.width,
    this.ctx.canvas.height
  );

  this.ctx.drawImage(
    this.img,
    this.x + this.ctx.canvas.width,
    this.y,
    this.ctx.canvas.width,
    this.ctx.canvas.height
  );
};

Background.prototype.move = function() {
  this.x += this.vx;

  if (this.x + this.ctx.canvas.width < 0) {
    this.x = 0;
  }
};
