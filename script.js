const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
const c = canvas.getContext("2d");

//global data types

let width = 30;
let strokeColor = "black";

//corner display

const cornerDisplay = () => {
  c.beginPath();
  c.fillStyle = "blue";
  c.fillRect(canvas.width - 110, 0, 110, 110);
  c.closePath();
  tool(canvas.width - 55, 55);
};
const clearCornerDisplay = () => {
  c.clearRect(0, 0, 110, 110);
  c.closePath();
};
//spray paint

let draw = false;
let particleSize = 2;
let particleAmount = width / 4;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    this.xOffset = width * (Math.random() - 0.5);
    this.yOffset = width * (Math.random() - 0.5);
    c.beginPath();
    c.arc(
      this.x + this.xOffset,
      this.y + this.yOffset,
      particleSize,
      Math.PI * 2,
      0,
      false
    );
    c.fillStyle = strokeColor;
    c.fill();
  }
}

const sprayPaint = (x, y) => {
  for (let i = 0; i < particleAmount; i++) {
    new Particle(x, y).draw();
  }
};

//pencil

const pencilStroke = (x, y) => {
  c.beginPath();
  c.fillStyle = strokeColor;
  c.fillRect(x - width / 2, y - width / 2, width, width);
};

//eraser

const erase = (x, y) => {
  c.clearRect(x - width / 2, y - width / 2, width, width);
};

//draw functions

let tool = pencilStroke;

cornerDisplay();

addEventListener("keypress", function (event) {
  //stroke size handler
  if (width <= 100) {
    if (event.key === "+") {
      width += 5;
      particleAmount = width / 4;
    }
  }
  if (width >= 0) {
    if (event.key === "-") {
      width -= 5;
      particleAmount = width / 4;
    }
  }
  //stroke swap

  if (event.key === "s") {
    tool = sprayPaint;
  } else if (event.key === "p") {
    tool = pencilStroke;
  } else if (event.key === "e") {
    tool = erase;
  }
  cornerDisplay();
  if (event.key === "c") {
    clearCornerDisplay();
  }
});

addEventListener("mousedown", function (event) {
  draw = true;
  tool(event.clientX, event.clientY);
  cornerDisplay();
});
addEventListener("mousemove", function (event) {
  if (draw) {
    tool(event.clientX, event.clientY);
  }
});
addEventListener("mouseup", function (event) {
  draw = false;
});

//color change functions

let strokeRed = () => {
  strokeColor = "red";
  cornerDisplay();
};
let strokeRedOrange = () => {
  strokeColor = "orangered";
  cornerDisplay();
};
let strokeOrange = () => {
  strokeColor = "orange";
  cornerDisplay();
};
let strokeOrangeYellow = () => {
  strokeColor = "rgb(252, 200, 0)";
  cornerDisplay();
};
let strokeYellow = () => {
  strokeColor = "yellow";
  cornerDisplay();
};
let strokeLime = () => {
  strokeColor = "lime";
  cornerDisplay();
};
let strokeGreen = () => {
  strokeColor = "green";
  cornerDisplay();
};
let strokeCyan = () => {
  strokeColor = "rgb(0, 130, 140)";
  cornerDisplay();
};
let strokeBlue = () => {
  strokeColor = "blue";
  cornerDisplay();
};
let strokeIndigo = () => {
  strokeColor = "indigo";
  cornerDisplay();
};
let strokePurple = () => {
  strokeColor = "purple";
  cornerDisplay();
};
let strokeBrown = () => {
  strokeColor = "rgb(165, 97, 42)";
  cornerDisplay();
};
let strokeLightGray = () => {
  strokeColor = "lightgray";
  cornerDisplay();
};
let strokeGray = () => {
  strokeColor = "gray";
  cornerDisplay();
};
let strokeDarkGray = () => {
  strokeColor = "rgb(43, 43, 43)";
  cornerDisplay();
};
let strokeBlack = () => {
  strokeColor = "Black";
  cornerDisplay();
};
let strokePencil = () => {
  tool = pencilStroke;
  cornerDisplay();
};
let strokeSprayPaint = () => {
  tool = sprayPaint;
  cornerDisplay();
};
let strokeEraser = () => {
  tool = erase;
  cornerDisplay();
};
