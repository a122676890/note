function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype = {
  len: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  add: function(v) {
    return new Vector(this.x + v.x, this.y + v.y);
  },
  sub: function(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  },
  mul: function(f) {
    return new Vector(this.x * f, this.y * f);
  },
  div: function(f) {
    var invf = 1 / f;
    return new Vector(this.x * invf, this.y * invf);
  },
  dot: function(v) {
    return this.x * v.x + this.y * v.y;
  },
  refl: function(n) {
    return this.sub(n.mul(this.dot(n)));
  },
  norm: function() {
    return this.mul(1 / this.len());
  }
};

let a = new Vector(3, 4);
console.log('dot', a.dot({
    x: 1,
    y:2,
}));


// function init() {
//   cellSize = kradius * 2;
//   gridWidth = Math.floor((canvas.width + cellSize) / cellSize);
//   gridHeight = Math.floor((canvas.height + cellSize) / cellSize);
//   var size = gridWidth * gridHeight;
//   grid = new Array(size);
//   for (var i = 0; i < size; i++) grid[i] = [];
// }
function start() {
  canvas = document.getElementById("canvas1");
  ctx = canvas.getContext("2d");
  console.log(ctx);
  // init();
  // var t = 0,
  //   p = 100,
  //   c = 0;
  // var loop = function() {
  //   step(0.01);
  //   render();
  //   setTimeout(loop, 10);
  //   if (particles.length < 1314 && t % Math.floor(p) == 0) {
  //     particles.push(
  //       new Particle(
  //         new Vector2(canvas.width / 2, canvas.height / 5),
  //         new Vector2(Math.random() * 20 - 10, 0),
  //         text.charAt(c++ % text.length)
  //       )
  //     );
  //     p = Math.max(p * 0.98, 1);
  //   }
  //   t++;
  // };
  // loop();
}
