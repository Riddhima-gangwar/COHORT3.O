console.log('hello world');
console.warn('this is a warning');
console.error('this is an error');
console.table(['harsh', 'ashi', 'satyarth']);
var a=10
var b=20
console.log('value of a and b is', a, b);
console.log(a+b);


// Datatypes in javascript
// -premetive
// 1. String('harsh') or ("harsh") or (`harsh`)
// 2. Number(10) or (10.5)
// 3. Boolean(true) or (false)
// 4. Null(null) null is a value which is assigned to a variable but it is empty
var x = null;
console.log(x);
// 5. Undefined declared but not assigned any value default value is undefined
var c;
console.log(c); 
// 6. BigInt(9007199254740991n) or (9007199254740991n) used to store large integers
var bigInt = 9007199254740991n;
console.log(bigInt);
// 7. Symbol('symbol') or (Symbol('symbol')) used to create unique identifiers
var sym = Symbol('bye');
console.log(sym);


// -non premetive
// 1. Object
// 2. Array
// 3. Function



alert('padhlo jake');

// confirm('kya tumne padhai karli?');
var ans= confirm('kya tumne padhai karli?');
console.log(ans);// will return true if user clicks on ok and false if user clicks on cancel


var user = prompt('enter your name');
console.log(user);
var age = prompt('enter your age');
console.log(age);
console.log(typeof (age));// will return string because prompt always returns a string


// nan is not a number but it is of type number(returend in console when we try to perform mathematical operation on a string)
//+ operator is used for concatenation when we try to add a string and a number
var a='laisy';
var b='daisy';
console.log(a+b);

var num1= prompt('enter first number');
var num2= 10;
console.log('number 1:',num1);
console.log('number 2',num2);