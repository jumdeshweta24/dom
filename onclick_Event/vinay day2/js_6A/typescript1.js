let first_name = "shweta";
let last_name = "jumde";
let person = {
    first_name,
    last_name
};

function createPerson(first_name, last_name, age) {
    let full_name = first_name + " " + last_name;
    return {
        first_name,
        last_name,
        full_name,
        isSenior() {
            return age > 60;
        }
    };
}

let p = createPerson("Amit", "sharma", 15);
console.log(p.first_name); // Corrected property name
console.log(p.full_name);
console.log(p.isSenior());


// let ln="last name";
// let person={
//     "first name":"shweta",
//     [ln]:"Being"
// }
// console.log(person);