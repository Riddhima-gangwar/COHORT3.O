// values are given in key value pair
var obj ={
    username:'Ritik',
    age:22,
    city:'Delhi',
}
console.log(obj);
console.log(obj.username);

var obj2 ={
    username:'Pari',
    age:20,
    city:'Mumbai',
}
console.log(obj2);

//crud operations
var user={
    name:'krishan',
    age:22,
    marks:90,
    isSingle:true,
    batch:'Cohort3',
    spouse:{
        name:'Ritika',
        age:22,
        city:'Delhi'
    }
}
console.log(user);
//to add city
user.city='Delhi';
console.log(user);
//to update
user.age=89
user.marks=95;
user.isSingle=false,
console.log(user);

console.log(user.spouse.name);

delete user.batch;
console.log(user);

// if want all keys from object
console.log(Object.keys(user));
// if want all values from object
console.log(Object.values(user));
//entries gives both keys and values in array form
console.log(Object.entries(user));




var obj={
    name:'krishan',
    ram:'20mb',
    age:1,
    isworking:false,
    skills:['html','css','js'],
    address:{
        city:40,   
        state:'Delhi',
        country:true
    },
    sayHi:function(a){//function is a value here
        console.log('Hi',a);//parameter is passed to function and it will print the value of parameter
        // return 4;
    }
}
console.log(obj);   
console.log(obj.sayHi())//return undefined because function is not returning anything
obj.sayHi('vaibhav');



var myage=40;
var obj={
    name:'krishan',
    age:myage>20?myage:20,//ternary operator
}
console.log(obj);


//object with array 
var obj={
    name:'krishan',
    age:22, 
}
obj['city']='Delhi';


const user1={
    name:'krish',
    age:22,
}
// // user.name='hello';
// console.log(user);//error because we cannot reassign a constant variable
Object.seal(user1);//it will not allow to add or delete any property from object
//we can update value in seal but we cannot add or delete any property

Object.freeze(user1);//it will not allow to add, delete or update any property from object  



//destructuring of array
var arr=[11,22,33,44]
var [a,b,c,d]=arr;
console.log(a,b,c,d);

var arr=['aman','vaibhav','krishan','ritik'];
var [x,y,...z]=arr;//rest operator
//if we use[...] in left of = then it is rest operator and it will store the remaining values in an array, rest element must be last element in array
//whereas if we use [...] in right of = then it is spread operator and it will spread the values of array
console.log(x,y,z);


//destructuring of object
var obj={
    name: 'aman',
    age:20,
    batch:'cohort 3'
}
var {name,age,batch}=obj//we have to use same variable name as key name in object while destructuring
console.log(name,age,batch);

//or

var{name,...b}=obj
console.log(b);
console.log(name,b);

//copyinh an array using spread operator
var arr=[1,2,3,4,5];
var arr2=[...arr];  
arr2.push(6);
console.log(arr);
console.log(arr2);

//copying an object using spread operator
var obj={
    name:'krishan',
    age:22, 
}
var obj2={...obj};
obj2.city='Delhi';
console.log(obj);
console.log(obj2);
//this is a shallow copy it is not very perfect
var obj={
    name:'krishan',
    age:22,
    marks:55,
    college:{
        name:'abc',
        city:'Delhi'
    }
}
var obj2= {...obj};
obj2.college.city='Mumbai';
console.log(obj);
console.log(obj2);
//this is a shallow copy it is not very perfect because it will change the value of nested object in both objects


//deep copy - it will create a new object with new reference and it will not change the value of nested object in both objects
// json.stringify()//it will convert object to string
var a=10
var b=JSON.stringify(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
// json.parse()//it will convert string to object
var c=JSON.parse(b);
console.log(c);
console.log(typeof c);

//for in loop
var obj={
    name:'krishan',
    age:22, 
}
for(var key in obj){
    console.log(key);   
    console.log(obj[key]);//to access value of key we have to use bracket notation
}   
