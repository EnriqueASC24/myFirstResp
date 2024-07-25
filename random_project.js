let RNG = Math.random();
let randNum = RNG * 11;
let num1 = Math.floor(randNum);
let RNG2 = Math.random();
let randNum2 = RNG2 * 11;
let num2 = Math.floor(randNum2);

console.log('Random Number #1:', num1)
console.log('Random Number #2:', num2)
console.log('Sum:', num1, '+', num2, '=', num1 + num2)

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae' ];


let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let task2RNG = Math.random();
let task2Randnum = task2RNG * days.length;
let task2DayGen = Math.floor(task2Randnum);
let task2RNG2 = Math.random();
let task2Randnum2 = task2RNG2 * reactions.length;
let task2ReactionsGen = Math.floor(task2Randnum2);


console.log('Your Lucky Day:', days[task2DayGen])
console.log(reactions[task2ReactionsGen])

let min = parseInt(process.argv[2]);
let max = parseInt(process.argv[3]);
let task3RNG = Math.random();
let range = min + task3RNG * ((max - min) + 1)
let rangeFloor = Math.floor(range);
console.log('Random number:',rangeFloor)