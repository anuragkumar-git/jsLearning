//? Write a program to input the marks of a student and determine their grade based on the following conditions:
//? Marks > 90: Grade A
//? Marks > 75: Grade B
//? Marks > 50: Grade C
//? Marks <= 50: Grade F

let marks = 50;

if (marks > 90) {
    console.log("Grade A");
} else if (marks > 75) {
    console.log("Grade B");
} else if (marks > 50) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

//? Write a program that checks if a person is eligible to vote (age should be 18 or more).
let age = 55;
let con;
con = age > 18 ? "eligible" : "not-Eligible";
console.log(con);

//? Write a program to check if a given number is even or odd
let a;
let eve = (a) => {
    let c = a % 2 == 0 ? "even" : "odd";
    return c;
}
console.log(eve(6));

//? Write a program to find the largest of three numbers entered by the user using nested if statements.
let f = 10;
let g = 12;
let h = 25;

if (f > g) {
    if (f > h) {
        console.log(`${f} is largest`);
    } else {
        console.log(`${h} is largest`);
    }
} else {
    if (g > h) {
        console.log(`${g} is largest`);
    } else {
        console.log(`${h} is largest`);
    }
};

//? Write a program that performs basic calculations, allowing the user to input two numbers and an operator +, -, *, /). Use nested if-else statements to perform the appropriate operation.
let num1 = 50;
let num2 = 60;
let opr = "+"
if (opr === "+") {
    console.log(`sum of two numbers is: ${num1 + num2}`);
} else if (opr === "*") {
    console.log(`Multiplication of two numbers is: ${num1 * num2}`);
} else if (opr === "-") {
    console.log(`Subtraction of two numbers is: ${num1 - num2}`);
}else if (opr === "/") {
    console.log(`Division of two numbers is: ${num1 / num2}`);
}else{
    console.log("select proper operator");
}
