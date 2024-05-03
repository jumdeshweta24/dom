let arr = [1, true, "hello", [], {}, undefined, function(){}];
let b = 0, f = 0, no = 0, ob = 0, st = 0, un = 0;

for (let i = 0; i < arr.length; i++) {
    let a = typeof(arr[i]);
    
    switch(a) {
        case 'boolean':
            b += 1;
            break;
        case 'function':
            f += 1;
            break;
        case 'number':
            no += 1;
            break;
        case 'object':
            ob += 1;
            break;
        case 'string':
            st += 1;
            break;
        case 'undefined':
            un += 1;
            break;
    }
}

console.log("boolean:", b);
console.log("function:", f);
console.log("number:", no);
console.log("object:", ob);
console.log("string:", st);
console.log("undefined:", un);
