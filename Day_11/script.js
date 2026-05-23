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
console.log(10>5?'hello':'bye') // 'hello'

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



var math=Number(prompt('enter the math marks'))
var eng=Number(prompt('enter the english marks'))
var sci=Number(prompt('enter the science marks'))
console.log(math, eng, sci)
var total=math+sci+eng;
var avg=total/3;
if(avg>50)
{
    console.log('pass')
}
else if(avg==50)
{
    console.log('pass with average marks')
}
else
{
    console.log('fail')
}



var gender=prompt('enter the gender(M/F)')
var age=Number(prompt('enter the age'))
if(gender=='F')
{
if(age>=18 && age<=60)
{
    console.log('will get $4000 per month')
}
else
{
    console.log('not eligible for job')
}
}


//switch 
var day=prompt('enter the day')
switch(day)
{
    case 'monday':
        console.log('today is monday')
        break;
    case 'tuesday':
        console.log('today is tuesday')
        break;
    case 'wednesday':
        console.log('today is wednesday')
        break;  
    case 'thursday':
        console.log('today is thursday')
        break;
    default:
        console.log('enter a valid day')   
}
//if want to do comparision ques then first assign make switch(true) and then write cases with conditions
var num=Number(prompt('enter a number'))
switch(true)
{
    case num>0:
        console.log('number is positive')   
        break;
    case num<0:
        console.log('number is negative')
        break;
    case num==0:
        console.log('number is zero')
        break;
    default:
        console.log('enter a valid number')
}





//---------------------------------------------------------------------------------------------------------------------------------------------------
//                     Truthy and Falsy values

// - In JavaScript, a value is considered "truthy" if it evaluates to true in a boolean context, and "falsy" if it evaluates to false. The following values are considered falsy:
// - false
// - 0 (zero)
// - '' (empty string)
// - null
// - undefined
// - NaN (Not a Number)

//-----------------------------------------------------------------------------------------------------------------------------------------------------

