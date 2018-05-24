function Bullet(ctx, x, y) {
  this.ctx = ctx;
  this.x = x;
  this.y = y;

  this.r = 10;
  this.vx = 20;
  this.vy = 0;

  this.g = 0.25;

  this.shouldRemove = false;
}

Bullet.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.fillStyle = "red";
  this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.ctx.fill();
  this.ctx.closePath();
};

Bullet.prototype.move = function() {
  this.x += this.vx;

  this.vy += this.g;
  this.y += this.vy;

  if (this.y + this.r >= (this.ctx.canvas.height * 0.9)) {
    this.vy *= -1;
  }

  if (this.x - this.r > this.ctx.canvas.width) {
    this.shouldRemove = true;
  }
};