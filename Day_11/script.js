// type coercion:
// 1. implicit coercion(automatic type conversion=> when we use operators like +, -, *, /, ==, etc. JavaScript automatically converts the operands to the same type before performing the operation. For example:
//    - '5' + 10 will result in '510' (string concatenation)
//    - '5' - 10 will result in -5 (numeric subtraction)
//    - '5' * 10 will result in 50 (numeric multiplication)
//    - '5' / 10 will result in 0.5 (numeric division)
//    - '5' == 5 will result in true (loose equality comparison)

//    eg:
    var a='5'
    var b=10
    console.log(a+b) // '510'
    console.log(a-b) // -5
    console.log(a*b) // 50
    console.log(a/b) // 0.5
    console.log(a==b) // false

//      but if => 
    var a = 'raam'
    var b = 10
    console.log(a+b) // 'raam10'
    console.log(a-b) // NaN (Not a Number)
    console.log(a*b) // NaN (Not a Number)
    console.log(a/b) // NaN (Not a Number)
    console.log(a==b) // false

//     but if we have to convert string to number we can use Number() function or parseInt() function for explicit coercion.

// 2. explicit coercion()
//     - Explicit coercion is when we manually convert a value from one type to another using built-in functions or methods. For example:
//     - Number('5') will convert the string '5' to the number 5.
//     - parseInt('5') will convert the string '5' to the integer 5.   
//     - String(5) will convert the number 5 to the string '5'.

//     eg:
    var a = '5'
    var b = 10
    console.log(Number(a) + b) // 15
    console.log(parseInt(a) + b) // 15
    console.log(String(b) + a) // '105'

// -------------------------------------------------------------------------------------------------------------------------------------------------

//                     BINARY OPERATORS

// -arithmetic operators: +, -, *, /, %, ** (exponentiation)
// -assignment operators: =, +=, -=, *=, /=, %=, **=
// -comparison operators: ==, ===, !=, !==, >, <, >=, <=
// -logical operators: && (logical AND), || (logical OR), ! (logical NOT)
// -bitwise operators: &, |, ^, ~, <<, >>, >>>
// -increment and decrement operators: ++, --
// -ternary operator: condition ? expression1 : expression2
// -typeof operator: typeof
// -instanceof operator: instanceof

console.log(5 + 10) // 15


//--------------------------------------------------------------------------------------------------------------------------------------------------

//                     CONDITIONALS


var q=50
var w=100
if(q>w)
{
    console.log('q is greater than w')
}
else{
    console.log('w is greater than q')
}