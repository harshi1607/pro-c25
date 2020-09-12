class Paper{
    constructor(x,y,radius){
        var paper_options={
            isStatic : false,
            'restitution': 0.9,
            'friction' :0.5,
            'density' :1.2
       }
       this.body = Bodies.circle(x, y, radius, paper_options);
       this.radius = this.radius;
       this.image = loadImage("paper.png")
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       push()
       translate(pos.x,pos.y)
       imageMode(CENTER);
       fill("yellow");
       image(this.image,0,0,50,50)
       pop();
     }
   
}