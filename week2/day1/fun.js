//? Program to create a function that adds two numbers
let n1;
let n2;
let sum = (n1, n2) => {
    return n1 + n2;
}
console.log(sum(15, 15));


//? Program to create a function that calculates the factorial of a number
let s;
let fact = (s) => {
    let fun = 1;
    for (let i = 1; i <= s; i++) {
        fun *= i;
    };
    return fun;
}
console.log(fact(5));


//? Program to create a function that checks if a number is prime
let isprime = (num) => {
    if (num <= 1) {
        return `${num} isn't a Prime number.`;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return `${num} isn't a Prime number.`;
            }
        } return `${num} is a Prime number.`;
    }
}

console.log(isprime(3));


//? Program to create a function that generates the Fibonacci sequence up to n terms
let fibo = (n) => {
    if (n == 0) {
        return `Fibonacci of ${n} = ${n}`;
    } else if (n == 1) {
        let fib = [0, 1];
        return `Fibonacci series of ${n} = ${fib} \nFibonacci of ${n} = ${fib.pop()} `;
    } else if (n > 1) {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]); //It will add fib[2] = 1 fib[1] = 1
        }
        return `Fibonacci series of ${n} = ${fib} \nFibonacci of ${n} = ${fib.pop()} `;
    }
    return "Check your input!!.";
}
console.log(fibo(1));


//? Program to create a function that finds the maximum of three numbers
//* IIFE - immediately invoked function expression
let maxnum = ((num1, num2, num3) => {
    if (num1 > num2) {
        if (num1 > num3) {
            return `${num1} is greatest.`;
        } else {
            return `${num3} is greatest.`;
        }
    } else if (num2 > num3) {
        return `${num2} is gratest`;
    } else {
        return `${num3} is greatest`;
    }
})(50, 20, 110);
console.log(maxnum);


//? Program to create a function that checks if a string is a palindrome
let ispalindrome = (str) => {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
        // console.log(str[i]);
    }
    // return reverse;
    return str === reverse ? true : false;
}
console.log(ispalindrome("level"));