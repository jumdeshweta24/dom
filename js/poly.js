// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     Eat(){
//         return `${this.name} is Eating`
//     }
//     makeSound(){
//         return `${this.name} is shouting`
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this.breed=breed
//     }
//     Eat(){
//         return `something`
//     }
//     sniff(){
//         return `${this.name} will sniff`
//     }
// }
// let dog1=new Dog("snoofy","German")
// console.log(dog1.Eat())

//Polymorphism or multiple inhertiance
//flight method in many form
// class Bird{
//     Intro(){
//         return "There are many types of birds"
//     }
//     flight(){
//         return "Most of the birds can fly but some cannot."
//     }
// }
// class sparrow extends Bird{
//     flight(){
//         return "Sparrows can fly."
//     }
// }
// class ostrich extends Bird{
//     flight(){
//         return "Ostriches cannot fly."
//     }
// }
// let obj_bird=new Bird()
// let obj_spr=new sparrow()
// let obj_ost=new ostrich()
// console.log(obj_bird.Intro())
// console.log(obj_bird.flight())

// console.log(obj_spr.Intro())
// console.log(obj_spr.flight())

// console.log(obj_ost.Intro())
// console.log(obj_ost.flight())

let url="https://api.github.com/";
fetch(url)
.then((response)=>{
   return response.json()
})
.then((jsondata)=>{
    console.log(jsondata)
})
console.log("vinay")
