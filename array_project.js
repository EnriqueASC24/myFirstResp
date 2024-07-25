let letter = ['A', 'B', 'C', 'D', 'E'];
//console.log(letter[1]);
//console.log(letter[3]);
//console.log(letter[5]);

let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
//console.log(days[0]);
//console.log(days[6]);
//console.log(days.length);
//console.log(days[days.length]);//7 doesn't exist in the array but 6 does
//console.log(days[days.length - 1]);

let myArray = ['Do', 'Re', 'Mi', 'Fa', 'So']

console.log(myArray);

myArray.length = 2;
console.log(myArray);

myArray.length = 0;
console.log(myArray)

let scores = [85, 93, 65, 65, 92, 81, 93]

console.log("Average:", (scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6])/7)

let a_d = ['a', 'b', 'c', 'd']

console.log("Before:",a_d);
a_d.reverse();
console.log("After:",a_d);
a_d.reverse();
a_d.push(1,2)
console.log("After 2nd:",a_d);
a_d.splice(3,3)
console.log("After 3nd:",a_d);
a_d.splice(1,1);
a_d.push('d', 'e');
console.log("After 4nd:",a_d);
a_d.push('f');
a_d.splice(2,1);
a_d.reverse();
a_d.pop();
a_d.push('b','a')
console.log("After 5nd:",a_d);

let myArray2 = ['Hi', 90, '90', [1, 2, 3, 4], ':p'];

console.log(myArray2[3]);
console.log(myArray2[3][1]);

