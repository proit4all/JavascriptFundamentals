let car = {
  id: "1",
  _color: "red",

  get color() {
    console.log("getter");
    return this._color;
  },

  set color(color) {
    console.log("setter", color);
    this._color = color;
  },
};

console.log(car.color);
car.color = "blue";
console.log(car.color);

console.log(car._color);
