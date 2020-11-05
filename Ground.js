class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255, 0, 0);
      rect(pos.x, 785, this.width, 30);
      rect(0, 400, 7.5, 800);
      rect(480, 400, 7.5, 800);
    }
  };