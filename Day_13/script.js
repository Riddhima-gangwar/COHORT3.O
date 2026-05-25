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
d('dipesh');


//IIFE (Immediately Invoked Function Expression)anonymous function that is executed immediately after its creation
(function(){
    console.log("I am IIFE");
})();


if(true){
    let a=10//block scoped variable declared with let
    //var a=10//function scoped variable declared with var then the below statement will not throw error because var is function scoped and can be accessed outside the block
    console.log(a);
}
// console.log(a); //error because a is block scoped variable declared with let

(()=>console.log("I am IIFE with arrow function"))();



//return statement
function aaa(){
    console.log("I am aaa");
    return "return value of aaa";
    return "another return value of aaa"; //this will not be executed because the function exits after the first return statement
}
aaa();
console.log(aaa());


function perm(gender){
    if(gender==="male"){
        return "welcome male"
    }
    else {
        return "welcome female" 
    }
}
console.log(perm("male"));



function abc(){
    return 20
}
var b=abc();
console.log(b);
//return will not work in arrow without curly braces


//pure function(no changes in originality of data)
function pure(a,b){
    var c=8;//this variable is local to the function and does not affect any external state
    c++;
    return a+b;
}   
console.log(pure(5,7));


//impure function(changes in originality of data)
var a=10;
function impure(){
    a=a++;//this will change the value of a and make it 10 again because a++ returns the value of a before incrementing it
    console.log(a);
}   
impure();


//extra  argumetnt for that so default value is used to be undefined
function extra(a,b,c){
    console.log("hello",a,b,c);
}
extra(2,4); //extra arguments will be ignored and will not throw error because JavaScript functions can accept any number of arguments


//setting the default value
function greet(user="Guest"){
    console.log("good morning",user);
}
greet(); //will use default value "Guest"
greet("Alice"); //will use the provided value "Alice" 



//function inside function==== Callback function
function happy(){
    console.log("I am happy");
}
function why(q,w){
    console.log("I am sad because",w);
} 
why(happy(),2); //happy() will be executed first and then its return value (which is undefined) will be passed to why() as an argument



//first class functions(stored in variables, passed as arguments, returned from other functions)
var myFunction = function() {
    console.log("I am a first-class function");
};
myFunction();

function main(cb){
    console.log("I am the main function");
    cb(); //callback function is called inside the main function
}
function side(){
    console.log("I am the side function");
}
main(side); //side function is passed as an argument to main function and will be called inside main function


function parent(){
    console.log("I am the parent function");
    function child(){
        console.log("I am the child function");
        return 40
    }
    return child()
}
parent()