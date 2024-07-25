let a = process.argv[2];
//console.log(a);

//console.log(process.argv[2]);
//console.log(process.argv[3]);
//console.log(process.argv[4]);

let input1 = parseInt(process.argv[2]);
let input2 = parseInt(process.argv[4]);

//console.log(typeof(input1));
//console.log(typeof(input2));

let result = (input1) + (input2);

//console.log(result)

let name = process.argv[2];
let age = process.argv[3];
let gender = process.argv[4];
let DOB = process.argv[5];
let phoneNum = process.argv[6];

//console.log("Name", name)
//console.log("Age", age)
//console.log("Gender", gender)
//console.log("DOB", DOB)
//console.log("Phone No.", phoneNum)

console.log('Calculting...')
let num1 = parseInt(process.argv[2]);
let num2 =parseInt(process.argv[3]);
console.log("results")
console.log(num1, "+", num2, '=', num1 + num2)