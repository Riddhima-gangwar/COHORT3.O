//(Dom(Browser api(js)))

// in inspect in applications there are local storage, session storage, cookies, cache, indexedDB, webSQL which is used to store data in browser.


function abc()
{
    console.log(window);
}
console.log(this); // this is window object in browser

//strict mode
//"use strict";
// it is used to write secure code in js. It will not allow to use undeclared variable, duplicate parameter, delete variable, etc.
var a=10
console.log(a);
console.log(10+30);
// console.log(b); // it will give error because b is not declared
// console.log(10+30); // it will give error because we are using strict mode and we are trying to use undeclared variable b

const b=20
// b=30 // it will give error because we are trying to change the value of constant variable b


//syntax error
//reference error
//type error
//range error
//urierror

//this keyword
//this keyword is used to refer the current object. It is used to access the properties and methods of the current object.
var obj={
    firstname:"John",
    lastname:"Doe",
    age:30,
    getIntro:function()
    {
        // console.log(obj)
        console.log(this);
        //to access the values:
        console.log(this.firstname+" "+this.lastname);
        this.lastname="Smith"; // it will change the value of lastname property of obj object
        console.log(this.lastname);
    }
}
obj.getIntro(); // it will give the current object obj


//default binding of this keyword means that if we call a function without any object, then this keyword will refer to the global object(window in browser) points to the global object such as window in non-strict mode, but becomes undefined in strict mode.
function xyz()
{
    console.log(this);
}
xyz();

// Arrow functions do not have their own `this`.
// They inherit `this` from their surrounding lexical scope.
// Therefore, obj2.getIntro() does NOT make `this` equal to obj2.
var obj2={
    firstname:"John",
    lastname:"Doe", 
    age:30,
    getIntro:()=>{
        console.log(this); // it will give the global object(window in browser) because arrow function does not have its own this keyword, it takes this keyword from its parent scope.     
    }
}
obj2.getIntro(); // it will give the global object(window in browser) because arrow function does not have its own this keyword, it takes this keyword from its parent scope.   


var obj3={
    name:'Sarthak',
    age:20,
    company:{
        name:'Google',
        isGood:true,
        getIntro:function()
        {
            console.log(this); // it will give the current object company
        }   
    }
}
obj3.company.getIntro(); // it will give the current object company
//The main difference is that a normal function has its own this, decided by how the function is called, while an arrow function does not have its own this and instead takes this from the surrounding place where it was created

var student1={
    firstname:'Sarthak',
    lastname:'Rajput',
    getIntro:function()
    {
        console.log(this.firstname+" "+this.lastname);
    }
}

var student2={
    firstname:'John',
    lastname:'Doe',
}
student1.getIntro.call(student2);

var student3={
    firstname:'Jane',
    lastname:'Smith',
    maths:45,
    computer:55,
    english:54
}

var result=function(){
    console.log(`${this.firstname} ${this.lastname} got ${this.maths} in maths, ${this.computer} in computer and ${this.english} in english`);
}
result.call(student3);
//if we use apply in place of call then we have to pass the arguments in array format.
var result2=function(maths,computer,english){
    console.log(`${this.firstname} ${this.lastname} got ${maths} in maths, ${computer} in computer and ${english} in english`);
}
result2.apply(student3, [student3.maths, student3.computer, student3.english]);


//bind method is used to bind the this keyword to a specific object. It returns a new function with the this keyword bound to the specified object.
var student4={
    firstname:'Sarthak',    
lastname:'Rajput',
getIntro:function()
{
    console.log(this.firstname+" "+this.lastname);
}    
}



//****************************************************************** */

//PROTOTYPE
//yeh ek link hota h jo dusre obj ko point krta . uss dusre obj ko bolte hai uska prototype

var arr= [10,20,30,40]

var obj={
    name:'Sarthak',
    age:20
}

function hero(){
    
}
console.log(arr.push);//
console.log(arr.__proto__);//will get all prototype methods of array 
 console.log(arr.__proto__.__proto__)//get object of prototype method
//after once again it will show null

//  Array -> Array -> Object
//  Object -> Object
//  Function -> Function -> Object

var college={
    name:'IIT Bombaby',
    Rating:'A+',
    students:5000,
    saySlogan:function(){
        console.log('we are best , we are iit');
    }
}
var branch={
    title:'Branch',
    name:'CSE',
    Rating: 'A++',
    students:500,
    subjects:['TOC','SD','CD']
}

var user = {
    name:'Raja',
    age:30,
    marks:98
}

user.__proto__ = branch
branch.__proto__=college

console.log(user.subjects);


//difference bet __proto__ and prototype
//har object par                                      sirf func par
//obj k prototype tk k actual link             wo obj jo new s bane instances k __proto__ banegs
//prototype hai                                  instance k prototype hoga