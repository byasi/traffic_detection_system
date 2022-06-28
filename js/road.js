class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 1000000;
    this.top = -infinity; 
    this.bottom = infinity;

    // getting borders of the road
    // const topLeft = {x:this.left,y:this.top};
    // const topRight = {x:this.left,y:this.top};
    // const bottomLeft = {x:this.left,y:this.top};
    // const bottomRight = {x:this.left,y:this.top};


    // this.borders= [
    //     [topLeft,bottomLeft],
    //     [topRight,bottomLeft]
    // ]
  }
// getting to know the center of the lanes of the road
  getLaneCenter(laneIndex){
    const laneWidth = this.width/this.laneCount;
    return this.left+laneWidth/2+
    Math.min(laneIndex, this.laneCount-1)*laneWidth;
  }

  draw(ctx) {
    ctx.lineWidth = 5;
    ctx.strokeStyle = "white";

    // drawing the lines on the road
    for (let i = 0; i <= this.laneCount; i++) {
      const x = linearInterporation(this.left, this.right, i / this.laneCount);
      
    //   adding dashes to the road lines
        if(i>0 && i<this.laneCount){
            ctx.setLineDash([20,20]);
        } else {
            ctx.setLineDash([]);
        }
      
      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }

    // ctx.beginPath();
    // ctx.moveTo(this.left, this.top);
    // ctx.lineTo(this.left, this.bottom);
    // ctx.stroke();

    //     ctx.beginPath();
    //     ctx.moveTo(this.right, this.top);
    //     ctx.lineTo(this.right, this.bottom);
    //     ctx.stroke();
  }
}

