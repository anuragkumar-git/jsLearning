//? Program 1 ------------------------------------------ 
console.log("Hello World!!");

//? Program 2 ------------------------------------------
let a = 1;
let b = 2;
let sum = a + b;
console.log(sum);

let Num = typeof (23);
let str = typeof ("Hello");
let bool = typeof (true);
let arr = [1, 2, 3, 4];
console.log(`Datatype of Num = ${Num},\n Datatype of str = ${str},\n Datatype of bool = ${bool},\n Datatype of undefine = ${undefine},\n Datatype of arr = ${arr}`)
console.log(typeof (arr));

//? Program 3 ------------------------------------------
// conditional statements
let c = -1;
if (c > 0) {
    console.log(`${c} is a positive number`);
} else if (c < 0) {
    console.log(`${c} is a negative number`);
} else {
    console.log(`It's ${c}`);
}


//? Program 4 ------------------------------------------
//switch statment
let opration = "addition";
let num1 = 5;
let num2 = 6;
let result;

switch (opration) {
    case "addition":
        result = num1 + num2;
        console.log(result);
        break;

    case "subtraction":
        result = num1 - num2;
        console.log(result);
        break;

    case "division":
        result = num1 / num2;
        console.log(result);
        break;

    case "multiplication":
        result = num1 * num2;
        console.log(result);
        break;

    default:
        console.log("Select One Opration");
}


//? Program 5 ------------------------------------------
//Loops

//while loop: 
// initialization; 
// while(condition){
//     code to be executed; 
//     iteration;
// }
i = 0;
while (i < 5) {
    console.log(`value of i is ${i}`);
    i++;
};

// do while:
// initialization; 
// do{
//     code to be executed;
//     iteration;
// }while(condition)
j = 0;
do {
    console.log(j);
    j++;
} while (j < 5)


//for(initialization, condition, iteration)
for (let k = 6; k <= 10; k++) {
    console.log(k);
}


//? Program 6 ------------------------------------------
function add(a, b) {
    let sum = a + b;
    console.log(sum);
}

function sub(a, b) {
    return a - b;
}

let multi = (a, b) => {
    return a * b;
}


add(10, 20);
console.log(sub(50, 10));
console.log(multi(50, 10));


//* String Methods: length, indexOf, slice, substring, toUpperCase/LowerCase, replace, split
//? Program 7: find length, convert toUpperCase/LowerCase, extract a substring and replace a word.
let s;
let strMethods = (s) => {
    console.log(s.length);
    console.log(s.toUpperCase());
    console.log(s.toLowerCase());
    let rep = s.slice(0, 11);
    console.log(rep);
    console.log(rep.replace("there", "dimlesh"));
}
strMethods("Hello there, it's a demo of string methods");


//* Array Methods: push, pop, shift, unshift, concat, slice, splice, indexOf, join, forEach
//? Program 8: creats array of numbers, push, removes the first element (shift), joins the array element in to the string (concat)

let arry;
let index = (arry) => {
    console.log(arry);
    arry.push(44);
    console.log(arry);
    arry.shift();
    console.log(arry);
    arry.pop();
    console.log(arry);

    let result = [];
    arry.forEach((element, index) => {
        result.push(`Index: ${index}, Element: ${element}`);
    });
    return result;
}
console.log(index([10, 20, 30, 60, 50]));