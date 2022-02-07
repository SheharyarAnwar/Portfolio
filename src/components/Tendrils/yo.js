let target = { x: 0, y: 0 },
  tendrils = [],
  settings = {};

settings.friction = 0.5;
settings.trails = 30;
settings.size = 50;
settings.dampening = 0.25;
settings.tension = 0.98;

function Tendril() {
  class Node {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }
  }
  return {
    init: function (options) {
      this.spring = options.spring + Math.random() * 0.1 - 0.05;
      this.friction = settings.friction + Math.random() * 0.01 - 0.005;
      this.nodes = [];

      for (var i = 0, node; i < settings.size; i++) {
        node = new Node();
        node.x = target.x;
        node.y = target.y;

        this.nodes.push(node);
      }
    },
    update: function () {
      let spring = this.spring;

      let node = this.nodes[0];

      node.vx += target.x - node.x;
      node.vy += target.y - node.y;
      for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
        node = this.nodes[i];

        if (i > 0) {
          prev = this.nodes[i - 1];

          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;

          node.vx += prev.vx * settings.dampening;
          node.vy += prev.vy * settings.dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;

        spring *= settings.tension;
        // console.log(node);
      }
    },
    draw: function () {
      var x, y, a, b;

      ctx.beginPath();

      for (var i = 0, n = this.nodes.length - 1; i < n; i++) {
        a = this.nodes[i];
        b = this.nodes[i + 1];
        // means
        x = (a.x + b.x) * 0.5;
        y = (a.y + b.y) * 0.5;

        ctx.quadraticCurveTo(a.x, a.y, x, y);
      }

      ctx.stroke();
      ctx.closePath();
    },
  };
}
//-------------------------------------------------------------------------------------.
// function Tendril() {
//   class Path {
//     constructor() {
//       this.x = 0;
//       this.y = 0;
//       this.vx = 0;
//       this.vy = 0;
//     }
//   }
//   return {
//     init: function (options) {
//       this.paths = [];
//       for (let i = 0; i < settings.size; i++) {
//         let path = new Path();
//         path.x = target.x;
//         path.y = target.y;
//         this.paths.push(path);
//       }
//     },
//     update: function () {},
//     draw: function () {
//       let x, y, a, b;
//       ctx.beginPath();
//       for (let i = 0; i < this.paths.length - 1; i++) {
//         a = this.paths[i];
//         b = this.paths[i + 1];
//         x = (a.x + b.x) * 0.5;
//         y = (a.y + b.y) * 0.5;
//         ctx.quadraticCurveTo(a.x, a.y, x, y);
//       }
//       ctx.stroke();
//       ctx.closePath();
//     },
//   };
// }
function reset() {
  tendrils = [];

  for (var i = 0; i < settings.trails; i++) {
    let x = new Tendril();
    x.init({
      spring: 0.45 + 0.025 * (i / settings.trails),
    });
    tendrils.push(x);
  }
}
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.addEventListener("mousemove", mousemove);
window.addEventListener("focus", start);
const ctx = canvas.getContext("2d");
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var color = randomIntFromInterval(1, 2);

function loop() {
  if (!ctx.running) return;

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#1D1D1D";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = "lighter";
  ctx.strokeStyle = "hsla(346,98%,56%,0.25)";
  ctx.lineWidth = 1;
  if (color == 1) {
    ctx.strokeStyle = "hsla(346,98%,56%,0.25)";
  } else {
    ctx.strokeStyle = "hsla(171,98%,56%,0.25)";
  }
  for (var i = 0, tendril; i < settings.trails; i++) {
    tendril = tendrils[i];
    tendril.update();
    tendril.draw();
  }

  requestAnimationFrame(loop);
}
function mousemove(event) {
  if (event.touches) {
    target.x = event.touches[0].pageX;
    target.y = event.touches[0].pageY;
  } else {
    target.x = event.clientX;
    target.y = event.clientY;
  }
  event.preventDefault();
}
function start() {
  ctx.running = true;

  reset();
  loop();
}
start();
