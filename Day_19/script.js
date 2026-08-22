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



//CALLBACKS
// - Function ko argument ke roop me pass karna, aur jab kaam complete ho jaye, tab us function ko call karna.
// - Callback function = wo function jo dusre function ke andar argument ke roop me pass hota hai, aur kaam complete hone par call hota hai.
// - Callback hell = nested callbacks ka problem, jisme code samajhna mushkil ho jata hai. Isko avoid karne ke liye Promises ya async/await use karte hain.

function namasteBolo(naam) {
  console.log("Namaste " + naam);
}
function welcome(callback) {
  let user = "Rahul";
  callback(user); // yahan callback ko call kiya
}
welcome(namasteBolo);
// Output: Namaste Rahul

// - **Synchronous callbacks** — turant chalte hain (jaise `arr.map`, `arr.forEach`).
// - **Asynchronous callbacks** — kisi kaam ke complete hone ke baad chalte hain (jaise `setTimeout`).


// ### `setInterval` — baar-baar, repeat
// `setInterval(function, delay)` ek function ko **har `delay` ms par baar-baar (repeatedly)** chalata rehta hai jab tak aap rokte nahi.
let int = setInterval(function(){
  console.log('Interval');
},500) // 5 sec ke baad baar-baar chalega

//if using the setInterval, you can stop it using clearInterval. For example:
let int1 = setInterval(function(){
  console.log('Interval...');
},1000)
setTimeout(function(){
  clearInterval(int1)
  console.log('Interval stopped');
},5000) // 5 sec ke baad interval stop ho jaayega

//Error-first callbacks (Node.js style)
function dataLao(callback) {
  setTimeout(() => {
    let error = null;
    let data = { id: 1, naam: "Aman" };
    if (error) {
      callback(error, null);
    } else {
      callback(null, data); // pehla null = koi error nahi
    }
  }, 1000);
}
dataLao((err, data) => {
  if (err) {
    console.log("Error aaya:", err);
    return;
  }
  console.log("Success:", data);
});



// Dekho ye triangle/pyramid shape — isi ko "Pyramid of Doom" ya "Callback Hell" kehte hain.
// Isi problem ko solve karne ke liye Promises aaye


//PROMISES
//Promise ek object hai jo ek async operation ke future result (ya error) ko represent karta hai.
// pending	Abhi kaam chal raha hai, na success na fail. (Initial state)
// fulfilled	Kaam successfully complete (resolve ho gaya).
// rejected	Kaam fail ho gaya (error aa gaya).
//new Promise() ek function leta hai jise executor kehte hain
// - `resolve(value)` call karo toh promise `fulfilled` ho jaata hai uss value ke saath.
// - `reject(error)` call karo toh promise `rejected` ho jaata hai.


const myPromise = new Promise((resolve, reject) => {
  // ye "executor function" hai — turant chalta hai
  let kaamSafal = true;
  if (kaamSafal) {
    resolve("Kaam ho gaya! 🎉"); // fulfilled
  } else {
    reject("Kuch gadbad hui 😢"); // rejected
  }
});



// - **`.then(callback)`** — promise `fulfilled` hone par chalta hai, result deta hai.
// - **`.catch(callback)`** — promise `rejected` hone par chalta hai, error deta hai.
// - **`.finally(callback)`** — promise settle hone par hamesha chalta hai (chahe success ho ya fail). Cleanup ke liye useful (jaise loading spinner band karna).
dataLao()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Kaam khatam (chahe pass ho ya fail)");
  });
// Data laa raha hoon...
// (2 sec baad)
// Success: { id: 1, naam: 'Aman' }
// Kaam khatam (chahe pass ho ya fail)


//Yaad rakho: Ek single .catch() end me lagao — wo poori chain ka error handler ban jaata hai. Har .then ke saath alag error handling ki zaroorat nahi.




// ### `Promise.all` — sab successful hone chahiye
// Multiple promises ka array leta hai. **Jab SAARE fulfill ho jaate hain**, tab ek array of results deta hai. **Agar koi ek bhi reject ho gaya, toh poora `Promise.all` turant reject ho jaata hai.**
const p1 = Promise.resolve("Chai");
const p2 = Promise.resolve("Samosa");
const p3 = Promise.resolve("Biscuit");
Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results); // ['Chai', 'Samosa', 'Biscuit']
  })
  .catch((err) => {
    console.log("Koi ek fail hua:", err);
  });


//### `Promise.race` — jo pehle settle ho
// Jo bhi promise **sabse pehle settle (fulfill YA reject)** hota hai, uska result/error de deta hai. Race (daud) jeetne wala.
const fast = new Promise((res) => setTimeout(() => res("Fast 🐇"), 1000));
const slow = new Promise((res) => setTimeout(() => res("Slow 🐢"), 3000));
Promise.race([fast, slow])
  .then((winner) => console.log(winner)); // Fast 🐇 (1 sec baad)



  let response = fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log(response); // Promise { <pending> } — abhi kaam chal raha hai
 


//   ## 🎯 Quick Revision / Cheat Sheet

// | Concept | Ek line summary |
// | --- | --- |
// | **Synchronous** | Line by line, ek kaam khatam tabhi agla. Blocking. |
// | **Asynchronous** | Lamba kaam side me, code rukta nahi. Non-blocking. |
// | **Callback** | Function jo dusre function ko pass hota hai, baad me call hone ke liye. |
// | **Callback Hell** | Nested callbacks ka pyramid — unreadable mess. |
// | **Promise** | Future result/error ka object. States: pending → fulfilled/rejected. |
// | **.then/.catch/.finally** | Success / error / always — promise consume karne ke liye. |
// | **Promise.all** | Sab pass tabhi success; ek fail toh poora fail. |
// | **Promise.race** | Jo pehle settle ho (pass ya fail). |
// | **Promise.allSettled** | Sabka result, fail ho ya pass. Kabhi reject nahi. |
// | **Promise.any** | Jo pehle pass ho; saare fail tabhi error. |
// | **async/await** | Promises ka clean syntax. await = result ka wait. |
// | **try/catch** | async/await me error handling. |
// | **Event Loop** | Sync → saare Microtasks → ek Macrotask → repeat. |
// | **Microtask** | Promise/.then/await — HIGH priority. |
// | **Macrotask** | setTimeout/setInterval — LOW priority. |
// | **fetch** | Network call, promise return karta hai. `response.ok` check karo! |
// | **JSON.stringify** | Object → JSON string (bhejne ke liye). |
// | **JSON.parse** | JSON string → Object (lene ke baad). |



//check the phase 5 notes for details


//event loop 
