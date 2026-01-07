const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let isDrawing = false;
let circle;
let circleRadius = 10;
let raf;

let mouse = {
    x: null,
    y: null,
}

class Circle {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
    }
}

let draw = () => {
    if(!isDrawing) return;
    circle = new Circle(mouse.x, mouse.y, circleRadius, "black");
    circle.draw(ctx);
};

// let update = () => {
//     raf = window.requestAnimationFrame(update);
// };

window.addEventListener("click", (e) => {
    if(isDrawing) {
        isDrawing = false;
    } else {
        isDrawing = true;
    }
    mouse.x = e.x;
    mouse.y = e.y;
    draw();
});

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    draw();
});

// window.addEventListener("DOMContentLoaded", () => {
//     update();
// });

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener("visibilitychange", () => {
    window.cancelAnimationFrame(raf);
});