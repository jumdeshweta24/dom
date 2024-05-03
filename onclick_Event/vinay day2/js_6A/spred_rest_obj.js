var students={
    name:"ajay",
    age:"28",
    hobbes:['cricket',"singing"]
}
kkkk
const {age,...rest}=students
console.log(age);
console.log(rest)

//spread
var new_Student={
    ...students,
    age:"29"
}
console.log(new_Student)