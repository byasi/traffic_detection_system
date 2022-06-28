class Car {
    constructor(x,y,width,height) {
        this.x=x,
        this.y=y,
        this.width=width;
        this.height=height;

        // car speed and acceleration  
        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }
// TODO: Read about Newton's equations of motion
    // update movement of car when arrow buttons are pressed
    update(){
       this.#move();
    }
    #move(){
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }
        if(this.speed>this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2
        } 
        // Note: the negative sign indicates that the car is going backwards
        if(this.speed>0){
            this.speed-=this.friction;
        }
        if(this.speed<0){
            this.speed+=this.friction;
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }
        if(this.speed != 0){
            const flip = this.speed > 0 ? 1: -1;
            // REad about BOX2d library
        if(this.controls.left){
            this.angle+=0.03*flip;
        }
        if(this.controls.right){
            this.angle-=0.03*flip;
        }
    }
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;

        // this.y-=this.speed;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        
        ctx.beginPath();
        ctx.rect(
            // this.x-this.width/2,
            // this.x-this.height/2,
            // x is the center of the car, to get boundaries of car, 
            // we subtract the half of width en half of height from x
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
        ctx.restore();
    }
}