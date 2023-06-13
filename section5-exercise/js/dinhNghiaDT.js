const prompt = require("prompt-sync")();
let Sharp = {
  _x: 0,
  _y: 0,
  _color: "red",
  set x(value) {
    this._x = value;
  },
  get x() {
    return this._x;
  },
  set y(value) {
    this._y = value;
  },
  get y() {
    return this._y;
  },
  set color(value) {
    this._color = value;
  },
  get color() {
    return this._color;
  },

  read: function () {
    this.x = prompt("Nhap x: ");
    this.y = prompt("Nhap y:");
    this.color = prompt("Nhap color: ");
  },
  display: function () {
    const st = `x = ${this.x} - y = ${this.y} - color = ${this.color}`;

    console.log(st);
  },
};

Sharp.read();

Sharp.display();
