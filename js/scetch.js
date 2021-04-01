var balloons = [];
var total = 10;

function setup(){
  for (let i = 0; i < total; i++) {
    balloons.push(new Balloon());

    pop();
  }
}

function draw(){
  for (let i = 0; i < balloons.length; i++) {
    balloons[i].show(); 
  }
}