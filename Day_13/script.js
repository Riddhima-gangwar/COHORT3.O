//function
// function walk(parameters)
function walk(a,d)
{
    console.log("I am walking ",a+d);
}
function run()
{
    console.log("I am running");
}
function jump(n)
{
    console.log("I am jumping " + n + " times");
}
walk(5,7);
run();
jump(4);

// walk(arguements)


function greet(user,age)
{
    console.log("good morning",user)
    if(age<18)
    {
        console.log("you are a minor", age);
    }
    else
    {
        console.log("you are an adult", age);
    }
}
greet("Alice", 25);
greet("Bob", 16);

//-----------------------------------------------------------------------------------------------------------------------------

//         TYPES OF FUNCTIONS

//func declaration
function a1(a)
{
    console.log("I am a1",a);
}

//func expression
var b1=function (b)
{
    console.log("hello",b);
}

//arrow function
var c=(a)=>{
    console.log("I am c",a);
}
b1('harsh')
a1('riddh')
c('satyarth')

//one line arrow function
var d=(x)=>console.log("I am d",x);
d('dipesh')


//IIFE (Immediately Invoked Function Expression)anonymous function that is executed immediately after its creation
(function(){
    console.log("I am IIFE");
})()


if(true){
    let a=10//block scoped variable declared with let
    //var a=10//function scoped variable declared with var then the below statement will not throw error because var is function scoped and can be accessed outside the block
    console.log(a);
}
console.log(a); //error because a is block scoped variable declared with let


(()=>console.log("I am IIFE with arrow function"))()