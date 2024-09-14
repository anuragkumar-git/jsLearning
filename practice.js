// js Practice programs
console.log("Hello World!!");

let a = 1;
let b = 2;

let sum = a + b;
console.log(sum);

let Num = typeof (23);
let str = typeof ("Hello");
let bool = typeof (true);
let arr = [1,2,3,4];
let undefine;
console.log(`Datatype of Num = ${Num},\n Datatype of str = ${str},\n Datatype of bool = ${bool},\n Datatype of undefine = ${undefine},\n Datatype of arr = ${arr}`)
console.log(typeof(arr));

// conditional statements
let d = -1;
if (d > 0) {
    console.log(`${d} is a positive number`);
} else if (d < 0) {
    console.log(`${d} is a negative number`);
} else {
    console.log(`It's ${d}`);
}