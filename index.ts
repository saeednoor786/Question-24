/*Q:24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
  If you want to try more comparisons, write more tests. 
  Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

let string1 = "saeed";
let string2 ="mubashir";
let num1 = 5;
let num2 = 10;
let array = [1,2,3,4,5,];

console.log("\n tests for equality and inequality with strings:");
console.log(string1 === 'saeed');
console.log(string1 === string2);

console.log("\n tests using the lower case function:");
console.log(string1.toLowerCase() === 'saeed');
console.log(string1.toLowerCase() !== 'mubashir');

console.log("\n Numerical Tests :");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !==  10);

console.log("\n tests using 'and' and 'or' operators:");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));

console.log("\n tests whether an item is in an array:");
console.log(array.includes(6));
console.log(array.includes(2));

console.log("\n tests whether an item is not in an array:");
console.log(!array.includes(6));
console.log(!array.includes(3));


