// 1 normal function / function declaration
function name(a, b) {
    return a + b;
}

// 2. function expression
const add2 = function name(a, b) {
    return a + b;
}

// 3. arrow function
const add3 = (a, b) => a + b;
const sum = add3(7, 3);
console.log(sum);

// 3.1 single parameter
const getAge = (person) => person.age;
const student = { name: 'jahid', age: 28 };
const age = getAge(student);
console.log(age);

// 3.2 multiple parameter
const multiple = (x,y,z) => {
return result;
}

// 3.3 no parameter
const getPI = ()=>Math.PI;
console.log(getPI());