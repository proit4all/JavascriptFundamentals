let car = {
  _color: "red",
};

Object.defineProperty(car, "color", {
  get: function () {
    console.log("getter");
    return this._color;
  },
  set: function (value) {
    console.log("setter");
    this._color = value;
  },
});
console.log(car.color);
car.color = "Green";
console.log(car._color);
