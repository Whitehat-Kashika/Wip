class Bob {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          restitution:0.8,
            friction:0.3,
          density:1.2
      }

      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      this.x=x;
      this.y=y;
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

    
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("silver");
      ellipse(0,0, this.r, this.r);
      pop();
    }
  }