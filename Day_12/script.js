//                             LOOPS

//while loop
var a=0
while(a<5)
{
    console.log(a)
    a++
}


var a=0
var n=Number(prompt("Enter a number"))
console.log(n)
while(a<n)
{
    if(a%2!=0)
    {
        console.log(a)
    }
    a++
}


//print table of a number
var n=Number(prompt("Enter a number"))
var i=1
while(i<=10)
{
    console.log(n+" x "+i+" = "+n*i)
    i++
}


//do-while loop
var a=0
do{
    console.log(a)
    a++
} while(a<5)


//for loop
for(var a=0;a<5;a++)
{
    console.log('hello',a)
}

//--------------------------------------------------------------------------------------------

//webapi
var a=10
console.log(window);

//--------------------------------------------------------------------------------------------

// var(variable) is function scoped
// let(block scoped)
// const(block scoped and cannot be re-assigned)

var name="John brown"
var gender="male"
console.log(`My name is ${name} and I am a ${gender}`)
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(0,3))//if -ve value is given then it will start from end of the string
console.log(name.indexOf('o'))
console.log(name.includes('brown'))