//realdom - original render tree
//virtual dom= lightweight copy of dom
// Real DOM - actual DOM element
// The Virtual DOM does not exist inside the browser.
// It exists entirely in JavaScript memory.


let h1 = document.createElement("h1");
h1.textContent = "hello";
console.log(h1);
// Create a React element (Virtual DOM representation)
let rh1 = React.createElement(
    "h1",
    null,
    React.createElement("span", {}, "I am under h1")
);
// Select the root element from HTML
let realDomElem = document.querySelector("#root");
// Create a React root
let rootToReact = ReactDOM.createRoot(realDomElem);
// Render the React element
rootToReact.render(rh1);


//react dom accept the real dom eloement and render the virtual dom into the real dom element.
//  The virtual dom is a lightweight copy of the real dom that exists in memory, allowing React to efficiently update the UI by comparing the virtual dom with the real dom and making only the necessary changes.
// ### 1. Real DOM

// Browser ka actual HTML tree hota hai, jo screen par elements dikhata hai.

// Example: `document.createElement("h1")`

// ### 2. React Element

// `React.createElement()` ek JavaScript object banata hai, jo describe karta hai ki UI kaisa dikhna chahiye.

// ### 3. Virtual DOM

// UI ka lightweight representation hota hai, jise React updates calculate karne mein use karta hai.

// ### 4. Reconciliation & Diffing

// Jab state change hoti hai, React purani aur nayi UI representation ko compare karta hai aur differences identify karta hai.

// Example: `Hello` → `Hello React`

// ### 5. Render Phase

// React calculate karta hai ki UI mein kya changes karne hain. Is phase mein normally Real DOM update nahi hota.

// ### 6. Commit Phase

// React calculated changes ko Real DOM mein apply karta hai.

// ### 7. Browser Paint

// DOM update hone ke baad browser screen ko update karta hai, taaki user ko naya UI dikhe.

// ### 8. Fiber Architecture

// Fiber React ka internal system hai jo rendering work ko prioritize, pause aur resume karne mein help karta hai.

// ## Complete flow yaad karo

// State Change

// Render Phase

// Reconciliation / Diffing

// Commit Phase → Real DOM Update

// Browser Paint → Updated UI

// Interview ke liye one-line definitions:

// - Virtual DOM: UI ki in-memory representation.
// - Reconciliation: Purani aur nayi UI representation ke beech changes determine karna.
// - Diffing: Differences identify karne ki process.
// - Render Phase: Changes calculate karna.
// - Commit Phase: Changes Real DOM mein apply karna.
// - Fiber: React ka internal architecture jo rendering work ko manage aur prioritize karta hai.

// Trick: Render = Calculate, Commit = Apply, Paint = Show.
// Real DOM vs React Element ⭐

 // Real DOM
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
document.body.appendChild(h1);

// React Element
const element = React.createElement(
  "h1",
  {},
  "Hello React"
);

console.log(element);
// - document.createElement() → actual DOM element banata hai.
// - React.createElement() → React element object banata hai.


// React mein render karna
//Yaad rakho: createRoot() React root banata hai aur render() UI display karta hai.
const root = ReactDOM.createRoot(
  document.querySelector("#root")
);
root.render(
  React.createElement("h1", {}, "Hello React")
);


//State change aur UI update
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
export default App;
// Jab button click hoga:
// 1. setCount() state update request karta hai.
// 2. React component ko dobara render karta hai.
// 3. Reconciliation changes determine karti hai.
// 4. Commit phase mein required DOM updates apply hote hain.