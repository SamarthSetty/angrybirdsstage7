class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.trejectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>220&&this.body.velocity.x>10){
    var position=[this.body.position.x,this.body.position.y]
    this.trejectory.push(position);
  }
    for(var i = 0;i<this.trejectory.length;i++){
      image(this.smoke,this.trejectory[i][0],this.trejectory[i][1])

    }
  }
}
