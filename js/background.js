/*
Creamos la clase Background
Pasamos el contexto ctx

Creamos los métodos draw y move

*/
function Background(ctx) {
    this.ctx = ctx;

    this.x = 0;
    this.y = 0;
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.heigth;

    this.vx = -5;
    this.vy = 0;

    this.img = new Image();
    // this.img.src = "./img/bg.png";
    this.img.src = "https://www.walldevil.com/wallpapers/a73/wallpaper-mario-super-world-wallpapers.jpg"

}

Background.prototype.draw = function() {
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
    );
     this.ctx.drawImage(
          this.img,
          this.x + this.w,
          this.y,
          this.w,
          this.h
      )
};

Background.prototype.move = function() {
    this.x += this.vx;

    if (this.x + this.w <= 0) {
        this.x = 0;
    }
    
};
