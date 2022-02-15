
let playerimg;
function preload() {
  playerimg = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTB1DdkjbuH2WF9c6gLOpFI-z8GlVmML0EA&usqp=CAU");
}
function setup() {
    createCanvas(400, 400);
}
function draw() {
  background(220);
  image(playerimg, 0, 0);
}