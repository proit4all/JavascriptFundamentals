console.log(this);

console.log(this === window);

let sharp = {
  id: 1,
  draw: function () {
    console.log(this.id);
  },
};
sharp.draw();

function display() {
  "use strict";
  console.log("display: ", this);
}
display();
