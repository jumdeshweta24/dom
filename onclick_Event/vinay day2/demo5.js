let person={
    name:"shweta",
    age:[22,34,20],

    run:function(){
        console.log("running");
    },
    car:{
        model:"29"
    }
}
console.log(person['car']['model']);
person.run();
