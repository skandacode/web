let player_x=100;
let player_y=100;
let player_direction=0;
let player_x_speed=0;
let player_y_speed=0;
let player_speed=0;

let player;
function preload() {
  player=loadImage("https://raw.githubusercontent.com/skandacode/web/master/Online%20Game/static/player_left.png");
}
function setup() {
  createCanvas(1000, 600);
}
function move(){
  if (keyIsDown(LEFT_ARROW)) {
    player_direction+=-2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player_direction+=2;
  }
  if (keyIsDown(UP_ARROW)) {
    player_speed+=0.5;
  }
  player_x_speed=cos(player_direction/180*PI)*player_speed
  player_y_speed=sin(player_direction/180*PI)*player_speed
  player_x+=player_x_speed
  player_y+=player_y_speed
  player_x=player_x%1000
  player_y=player_y%600
  
  player_speed=player_speed*0.98
}
function draw() {
  background(220);
  move();
  //image(player, player_x, player_y);
  push()
  translate(player_x, player_y);
  imageMode(CENTER);
  rotate(player_direction/180*PI)
  image(player, 0, 0)
  pop()
}