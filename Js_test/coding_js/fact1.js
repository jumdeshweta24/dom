function createcar(color, brand) {
    return {
        color: color,
        brand: brand,
        start: function() {
            console.log("started");
        }
    };
}

var Car1 = createcar('red', 'bmw');
console.log(Car1); 
var Car2 = createcar('black', 'audi');
console.log(Car2); 
var Car3 = createcar('blue', 'tata');
console.log(Car3); 

