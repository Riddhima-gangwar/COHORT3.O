var arr=[10,'hey',30,false]

arr.forEach(function(){
    console.log("hello");//it will print hello 4 times as there are 4 elements in the array 
});


// if i want to print the values then
var brr=[12,20,30];
brr.forEach(function(value){
    console.log(value);
})

// if i want to print the index then
//first value tells what is the lee and second value tells what is the index
brr.forEach(function(elem,idx){
    console.log(elem,idx);
    // console.log(idx);
})

//find sum of ele
var a=[10,22,45,67];
var sum=0;
a.forEach(function(elem){
    sum=sum+elem;
})
console.log(sum);

//foreach does not return anything





// ************************************* MAP ***********************************************

//print the double of array and square===== map 
// map can return also (to transform the array values)
var arr=[10,20,30,40];

var arr2= arr.map(function(elem){
    return elem*2;
})
console.log(arr2);

var arr3= arr.map(function(elem){
    return  elem*elem;
})
console.log(arr3);


// we can perform any operation on array on the passed elements and return the value as per our requirement
var users = ['riddh', 'siddharth', 'priyanshu'];
var newusers= users.map(function(elem){
    return elem.length;
})
console.log(newusers);

//print even and odd- if the value is even then return elem and if the value is odd then return +1
var arr=[10,11,12,13,14];
var arr2= arr.map(function(elem){
    if(elem%2==0)
    {
        return elem;
    }
    else
    {
        return elem+1;
    }
})
console.log(arr2);

//it returns undefined if we do not return anything in the map function
// map- transform ,length same rahegi , har ele add hoga



// ************************************** FILTER ***********************************************

// to filter the values from the current array and return a new array as per the condition provided in the callback function
// it return [] if no value is found as per the condition
//select , length change ho skti hai , sirf match ele add honge

var arr=[10,-11,12,13,-14];
var arr2=arr.filter(function(elem){
    //in this with return a condition is passed
 return elem>0;// it will return only the positive values in the new array
})
console.log(arr2);

//return elem.includes('a')// it will return the values which have a in it
var users = ['riddh', 'siddharth', 'priyanshu'];
var newusers= users.filter(function(elem){
    return elem.includes('a');
})
console.log(newusers);

