console.log(this);//window

//value of this inside function
function a() {
    console.log(this);
}
a(); //window because its default value of this is window object

// value of this inside function in strict mode
function b() {
    'use strict';
    console.log(this);
}
b(); //undefined because in strict mode, the value of this inside function is undefined

//this inside method
var obj4={
    name:'Sarthak', 
    age:20,
    getIntro:function(){
        console.log(this); // it will give the current object obj4
    }
}
obj4.getIntro(); // it will give the current object obj4

//this in method using arrow function
var obj5={
    name:'Sarthak',
    age:20,
    getIntro:()=>{
        console.log(this); // it will give the global object(window in browser) because arrow function does not have its own this keyword, it takes this keyword from its parent scope.     
    }
}
obj5.getIntro(); // it will give the global object(window in browser) because arrow function does not have its own this keyword, it takes this keyword from its parent scope.


//CONSTRUCTOR FUNCTION
//while create a cons function use pascal case and while create a variable use camel case.
function CreateSongs(){
    this.songName="Shape of you";
    this.albumName="Hurry up";
    this.singer = 'Ed Sheeran';
    this.duration = 4.5;
    this.isLiked = true;

}
let song1= new CreateSongs();
console.log(song1);




class MakeStudents{
    constructor(fname,lname,contact,isVerified)
    {
        this.fname=fname;
        this.lname=lname;
        this.contact=contact;
        this.isVerified=isVerified;        
    }
    showProfile= function(){
        if(this.isVerified){
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
        }
        else
        {
            console.log('User is not verified');
        }
        let s1= new MakeStudents('Sarthak','Kumar',1234567890,true);
        console.log(s1);
    }
}


// ###  Event Handlers mein `this`

// **Regular function handler** mein `this` = wo HTML element jis par event laga:
button.addEventListener("click", function () {
  console.log(this); // wo button element jispe click hua
});


// Non-strict mein default binding global object deta tha; strict mode mein wo undefined de deta hai. Yeh accha hai — galti se global object ko ganda karne se bachata hai
// arr  →  Array.prototype  →  Object.prototype  →  null




// ### 3.5 — Inheritance via Prototypes
const vehicle = {
  start() { console.log(this.name + " start ho gayi"); }
};

const car = Object.create(vehicle);
car.name = "Swift";
car.start(); // Swift start ho gayi

// `car` ne `start` method `vehicle` se inherit kiya, aur jab method chala toh `this` = `car` raha (dot ke left wala rule!). Isliye `this.name` = "Swift". **Yahi prototypal inheritance ka core idea hai.**



// extends- inherit karwata hai.
// - `super(name)` → parent ke constructor ko call karta hai.
class Animal {
  constructor(name) { this.name = name; }
  eat() { console.log(this.name + " kha raha hai"); }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);       // parent ka constructor call
    this.breed = breed;
  }
  bark() { console.log(this.name + " bhonk raha hai"); }
}
const d = new Dog("Tommy", "Labrador");
d.eat();  // Tommy kha raha hai (Animal se inherited)
d.bark(); // Tommy bhonk raha hai (Dog ka apna)



// static wali cheezein object par nahi, class par hoti hain. Inhe instance se nahi, directly class se call karte ho.
// Utility/helper functions ke liye static perfect hai.
class MathHelper {
  static PI = 3.14159;          // static property
  static add(a, b) { return a + b; } // static method
}
console.log(MathHelper.add(2, 3)); ///////////// 5  (class se call)
console.log(MathHelper.PI);        // 3.14159
const m = new MathHelper();
// m.add(2, 3); → Error: static method instance par nahi hota


// ### Getters & Setters
// In se hum method ko property ki tarah use karte hain (bina `()` lagaye).

