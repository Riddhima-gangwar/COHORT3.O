//          LOOPS

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