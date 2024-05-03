// car={
//     color:"red",
//     brand:"audi",
//     start:function(){
//         console.log(this)
//     }
// }
// console.log(car)

// function start(){
//     console.log(this)
// }
// start()
// let start=()=>{
//     console.log(this)
// }
// start()

// let var1=new Array("a",1,2)
// var1.push("cat")
// console.log(var1)
// console.log(var1.length) 
// // console.log(var1.prototype)
// console.log(Object.getPrototypeOf(var1))

// let myfun=new Function("color,brand",
//     `this.color=color;
//     this.brand=brand;
//     this.start=function(){
//         console.log("started")
//     };`
// );
// // let new_Func=new myfun("red","audi")
// // console.log(new_Func.color);
// console.log(Object.getPrototypeOf(myfun))

// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     displayfullname(){
//         return this.firstname +" "+ this.lastname ;
//     }
// }
// let vinay=new Person("vinay","vadlapuri");
// console.log(vinay)
// console.log(vinay.firstname)
// console.log(vinay.displayfullname())

// class Employee{
//     constructor(firstname,lastname,salary,age){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.salary=salary
//         this.age=age
//     }
//     isbonus(){
//         if (age>=50){
//             this.salary=((this.salary*5)/100 )+ this.salary;
//             return sal;
//         }
//          else{
//             return this.salary
//          }   
//     }
// }
// class Employee {
//     constructor(firstname, lastname, salary, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.salary = salary;
//         this.age = age;
//     }

//     isBonus() {
//         if (this.age >50) {
//             this.salary = (this.salary * 5) / 100 + this.salary;
//             return this.salary;
//         } else {
            
//             return this.salary;
//         }
//     }
// }

// let shweta=new Employee("shweta","jumde",50000,23)
// console.log(shweta)
// console.log(shweta.isBonus)

class Animal{
    constructor(name){
        this.name=name
    }
    Eat(){
        return `${this.name} is Eating`
    }
    makeSound(){
        return `${this.name} is shouting`
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed=breed
    }
    sniff(){
        return `${this.name} will sniff`
    }
}
// let dog1=new Animal("toffyee")
// console.log(dog1.name)
// console.log(dog1.Eat())
// console.log(dog1.makeSound())
let dog2=new Dog("snoofy","German")
console.log(dog2.name)
console.log(dog2.breed)
console.log(dog2.sniff())
console.log(dog2.makeSound())