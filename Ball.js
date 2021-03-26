class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,radius/2,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        push ()
        translate (
            this.body.position.x,this.body.position.y
            
        )
        rectMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop ()
    }
}