class Balloon{
  constructor(){
    this.red = random(0,255);
    this.green = random(0,255);
    this.blue = random(0,255);
    this.r = random(75, 150);
    this.pos = createVector(random(width), random(height));
    this.lineSize = random(100, 150);
  }

  show(){
    push();
    fill(this.red, this.green, this.blue);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    pop();

    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    line(this.pos.x, this.pos.y + this.r, this.pos.x, this.lineSize);
    pop();
  }
}