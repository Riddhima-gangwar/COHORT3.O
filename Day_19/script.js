//ASYNCHRONOUS JAVASCRIPT
 

//Single-threaded = ek time pe sirf ek hi kaam kar sakta hai.
//syn= order me chalna  code line-by-line, upar se neeche, ek-ek karke chalta hai. Jab tak ek line complete nahi hoti, agli line start nahi hoti.
console.log('start');
var a=10
var b=20
var c=a+b

function a1(){
    console.log(c);
}

a1()
console.log('end');

//async= order me chalna nahi
// koi lamba kaam start kar do, usko side me chalne do, aur baaki code aage chalta rahe. Jab wo kaam complete hoga, tab uska result handle kar lenge.
console.log('start');
//settimeout->delay
// setTimeout(function(){

// },2000)
console.log('end');

//delay
function run(){
    console.log('hello guys , this is timeout');
}
setTimeout(run,2000)

//### Async kab chahiye?
// - Server/API se data laana (network requests)
// - File read/write karna
// - Timers (`setTimeout`, `setInterval`)
// - Database operations
// - User ke kisi action ka wait karna


// ### `setInterval` — baar-baar, repeat
// `setInterval(function, delay)` ek function ko **har `delay` ms par baar-baar (repeatedly)** chalata rehta hai jab tak aap rokte nahi.
let count = 1;
setInterval(() => {
  console.log("Count: " + count);
  count++;
}, 1000);