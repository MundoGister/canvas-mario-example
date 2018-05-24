function Player(ctx) {
  this.ctx = ctx;

  this.w = this.ctx.canvas.width * 0.15;
  this.h = this.ctx.canvas.height * 0.4;

  this.img = new Image();
  this.img.src = 'img/player.png';
  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.x = 2 * (this.w / this.img.frames);
  this.y = this.ctx.canvas.height - 1.25 * this.h;

  this.framesCounter = 0;

  this.bullets = [];

  this.setListeners();
}

Player.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

  this.bullets.forEach(function(bullet) {
    bullet.draw();
  });
};

Player.prototype.move = function() {
  this.framesCounter += 1;

  if ((this.framesCounter % 10) === 0) {
    this.framesCounter = 0;
    this.img.frameIndex += 1;

    if (this.img.frameIndex++ >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }

  this.bullets = this.bullets.filter(function(bullet) {
    bullet.move();

    return !bullet.shouldRemove;
  });
};

Player.prototype.shoot = function() {
  var bullet = new Bullet(
    this.ctx,
    this.x + (this.w / this.img.frames),
    this.y + (this.h / 2)
  );

  this.bullets.push(bullet);
};

Player.prototype.SPACE = 32;

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case this.SPACE:
        this.shoot();
        break;
    }
  }.bind(this);
};
