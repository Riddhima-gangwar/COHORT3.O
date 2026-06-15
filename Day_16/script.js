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
// map can return also 
var arr=[10,20,30,40];

var arr2= arr.map(function(elem){
    return elem*2;
})
console.log(arr2);

var arr3= arr.map(function(elem){
    return  elem*elem;
})
console.log(arr3);
