let a = 'abc';
let b = "abc";
console.log(a,b);

let c =  "'abc'";
let d = '"abc"';
console.log(c,d);

let e = `okten`;
console.log(typeof e,e);

let greeting = 'Hello';
let intro = 'my name is Ivan';

// подобные стринги интерпретируются браузером легче
let msg = greeting + ' ' + intro;
console.log(msg);

let msg2 = `${greeting} ${intro}`;
console.log(msg2);