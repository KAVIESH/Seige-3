class Block{
  constructor(x,y,color){
      
      
      this.body = Bodies.rectangle(x,y,50,70,color);
      this.color = color;
      this.width = 50;
      this.height = 70;
      this.Visiblity = 255;
      World.add(world, this.body);

  }

  score(){
      if(this.Visiblity === 0){
          score = score + 10;

      }
      
  }

  display(){
      var pos = this.body.position;
      
      fill(this.color);
      strokeWeight(5);
      
      if(this.body.speed < 7){
          rect(pos.x,pos.y,this.width,this.height);
          
      }
      else{
          
          push();
          World.remove(world,this.body);
          this.Visiblity = this.Visiblity-5;
          //tint(255,this.Visiblity);
          pop();
      }

    }

}