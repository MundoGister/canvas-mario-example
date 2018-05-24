function Player(ctx) {
}

Player.prototype.draw = function() {
};

Player.prototype.move = function() {
};

Player.prototype.shoot = function() {
};

Player.prototype.SPACE = 32;

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case this.SPACE:
        // ...
        break;
    }
  }.bind(this);
};
