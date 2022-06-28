const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const ctx = canvas.getContext("2d"); // gets Drawing context
const road = new Road(canvas.width/2, canvas.width*0.9);
// const car = new Car(100, 100, 30, 50);
const car = new Car(road.getLaneCenter(1),300,30,50);
car.draw(ctx);  

animate();

function animate(){ 
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate); // this causes the animate method many times again and again per second. it gives the illusion of movement that we want

}