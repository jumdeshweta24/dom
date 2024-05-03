// let input='name';
// let align={name:"shweta",tech:"python",
// 'work exp':1};
// console.log(align.name,align['tech']);
// console.log(typeof(align));
// console.log(align['input']);
let align={
    name:'shweta',
    tech:'python',
    laptop1:{
        cpu:'i7',
        rem:4,
        brand:'asus'
    },
    greet:function(){
        console.log("hii");
    }
}
delete tech;
align.greet();
//console.log(align);
