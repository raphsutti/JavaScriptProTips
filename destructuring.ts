// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let a: number, b: number, rest: number[];
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // [30,40,50]

const foo = [1, 2];
const [one, two] = foo;
console.log(one); // 1
console.log(two); // 2

const bar = { alice: 30, bob: 40 };
const { alice, bob } = bar;
console.log(alice); // 30
console.log(bob); // 40
