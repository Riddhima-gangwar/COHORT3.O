var a=[10,20,30,40,50];
console.log(a);

var b=['aman','vijay','sachin','rohit'];
console.log(b);

var c=[10,'aman',true,20.5,3,1,7,40];
console.log(c);
console.log(c[2]);
console.log(c.length);
console.log(c.length-1);
console.log(typeof(c));
c.push('rohit');//push=add element at the end of the array
console.log(c);
c.pop();//pop=remove element from the end of the array
console.log(c);

c.unshift(1)//unshift=add element at the beginning of the array
console.log(c);

c.unshift(20)
console.log(c);

c.shift();//shift=remove element from the beginning of the array
console.log(c);

c.splice(2,1);//splice(starting index,number of element to be removed)
console.log(c);
c.splice(2,0,'vijay');//splice(starting index,number of element to be removed,element to be added)
console.log(c);

var t = [10,20,30,40,50];
var r=t.slice(1,2);//slice(starting index,ending index)
console.log(r);

var d=[10,20,30,40];
d[10]=100;//add element at specific index
console.log(d);
console.log(d.length);

var arr=[10,20.5,'lolly',true,[1,2,33]];
console.log(arr[4][2]);//accessing element of nested array

var arr1=[[10,20,30], [40,50,60], [70,80,90]];
console.log(arr1);//accessing element of 2D array
console.log(arr1[1][2]+arr1[0][1]+arr1.length);//accessing element of 2D array


var arr2=[10,20,30,40,50];
arr2.reverse();//reverse the array
console.log(arr2);
arr2.sort();//sort the array in ascending order
console.log(arr2);
arr2.sort((a,b)=>a-b);//sort the array in ascending order
console.log(arr2);
arr2.sort((a,b)=>b-a);//sort the array in descending order
console.log(arr2);

for(var i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}



for(i of arr2){
    console.log(i);
}



//.join
var arr3=[10,20,30,40,50];
var str=arr3.join('-');
console.log(str);


//
var h=[]
for(i=0;i<5;i++){
    if(i%2==0){
        h.push(i);
    }
}
console.log(h);


var q=[10,20,30,40,50];
var w=[88,99,77,66,55];
var e=q.concat(w);
console.log(e);



//referenece behaviour of array
var a=10
var b=a;
b=50
console.log(a);
console.log(b);


var x=[10,20,30];
var j=x;
x[0]=100;
console.log(x);
console.log(j);


//copying an array
var arr=[10,20,30,40,50];
var arr2=[arr[0],arr[1],...arr[arr.length-1]];//spread operator
// better to write like
var arr2=[...arr];