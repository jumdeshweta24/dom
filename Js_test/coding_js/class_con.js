class CreateCar{
    constructor(color,brand){
        this.color=color;
        this.brand=brand
    
    }
    start(){
        console.log("started")
    }
}

let car1=new CreateCar('black','BMW');
console.log(car1);

let car2=new CreateCar('blue','tata');
console.log(car2);

let car3=new CreateCar('red','audi');
console.log(car3);