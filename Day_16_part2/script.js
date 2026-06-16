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
