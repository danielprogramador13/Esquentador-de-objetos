class Ball {
  constructor(x, y, w, h, e) {
    let options = {
      restitution: 0.8,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.n = n;
    this.e = e;
    World.add(world, this.body);
  }

  show(n, y) {
    var pos = this.body.position;
    var angle = this.body.angle;
    var blue = 255;
    var red = 255;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill(rgb(0 + n - y, 0, 0));
    red = red + n - y;
    if (this.e == true) {
      ellipse(0, 0, this.w, this.h);
    } else {
      rect(0, 0, this.w, this.h);
    }

    pop();
  }
}
