
  class bob {
    constructor(x, y,r) {
      var options = {
          isStatic : false,
          'restitution':1.4,
          'friction':1.0,
          'density':1.0
      }
    this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
    }
    /*display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);  
      
      ellipse(0,0, this.radius,35);
      pop();
    }*/
    display(){
      var pos = this.body.position;
      push ()
      translate(pos.x,pos.y);
      rotate (this.body.angle)
      strokeWeight(10);
      stroke("black");
      fill(153,204,255);
      ellipseMode(CENTER);
      ellipse(0,0,65,65)
      pop ()
  }
    
  }