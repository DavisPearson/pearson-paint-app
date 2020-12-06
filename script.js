const canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
const c = canvas.getContext("2d");
addEventListener("resize", function () {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
});

//global data types

let width = 30;
let strokeColor = "black";
let maxWidth = 200;
let minWidth = 10;

//corner display

const cornerDisplay = () => {
  c.beginPath();
  c.fillStyle = "white";
  c.fillRect(canvas.width - 210, 0, 215, 215);
  c.closePath();

  if (tool == erase) {
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(
      canvas.width - (107 + width / 2),
      103 - width / 2,
      width + 5,
      width + 5
    );
  }
  tool(canvas.width - 105, 105);
};
const clearCornerDisplay = () => {
  c.clearRect(canvas.width - 210, 0, 210, 210);
  c.closePath();
};
//spray paint

let draw = false;
let particleSize = 1;
let particleAmount = width / 4;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    this.determineOffsets();
    if (
      this.xOffset + this.yOffset < 0.67 * width &&
      this.xOffset + this.yOffset > -0.67 * width &&
      this.xOffset - this.yOffset < 0.67 * width &&
      this.xOffset - this.yOffset > -0.67 * width
    ) {
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
  determineOffsets() {
    this.xOffset = width * (Math.random() - 0.5);
    this.yOffset = width * (Math.random() - 0.5);
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

//marker

const marker = (x, y) => {
  c.beginPath();
  c.fillStyle = strokeColor;
  c.arc(x, y, width / 2, 0, Math.PI * 2, false);
  c.fill();
  c.closePath();
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
  if (width <= maxWidth) {
    if (event.key === "+") {
      width += 5;
      particleAmount = width / 4;
    }
  }
  if (width >= minWidth) {
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
  } else if (event.key === "m") {
    tool = marker;
  } else if (event.key === "e") {
    tool = erase;
  }
  cornerDisplay();
  if (event.key === "c") {
    clearCornerDisplay();
  }
});

addEventListener("wheel", function (event) {
  if (width <= maxWidth) {
    if (event.deltaY == -100) {
      width += 5;
      cornerDisplay();
    }
  }
  if (width >= minWidth) {
    if (event.deltaY == 100) {
      width -= 5;
      cornerDisplay();
    }
  }
});

addEventListener("mousedown", function (event) {
  draw = true;
  if (event.clientY > 110 || event.clientX > 970) {
    tool(event.clientX, event.clientY);
  }
  cornerDisplay();
  console.log(event.clientX);
});
addEventListener("mousemove", function (event) {
  if (draw && (event.clientY > 110 || event.clientX > 970)) {
    tool(event.clientX, event.clientY);
  }
});
addEventListener("mouseup", function () {
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
let strokeLightBlue = () => {
  strokeColor = "cyan";
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
let strokeMagenta = () => {
  strokeColor = "magenta";
  cornerDisplay();
};
let strokePink = () => {
  strokeColor = "pink";
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
let strokeMarker = () => {
  tool = marker;
  cornerDisplay();
};
let strokeEraser = () => {
  tool = erase;
  cornerDisplay();
};
