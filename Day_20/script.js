//promises

var a = fetch("https://jsonplaceholder.typicode.com/posts/1")
console.log(a) //Promise {<pending>}



// let p1 = new Promise(function(resolve,reject){
//     let val = true
//     if(val){
//         console.log("Promise is resolved")
//     }
//     else
//     {
//         console.log("Promise is rejected")
//     }
// })


// let p1 = new Promise(function(resolve,reject){
//     console.log("Promise is pending");
//     let result = true
//     setTimeout(function(){
//         if(result){
//             console.log("Promise is resolved");
//         }else{
//             console.log("Promise is rejected");
//         }
//     },3000)
// })


let p1 = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    let result = false
    setTimeout(function(){
        if(result){
            console.log("value true");
            resolve()
        }else{
            console.log("value falose");
            reject()
        }
    },3000)
})

p1.then(function(){
    console.log("Promise is resolved");
}).catch(function(){
    console.log("Promise is rejected");
})
.finally(function(){
    console.log('promise ended');
})



//order shoes from zomato
// order done -> order confirmed(your food is preparing)
//mai wait karunga order k prepared hone k liye
function orderFood(){
    let myOrder = new Promise(function(resolve,reject){

        console.log('order is  coming')

        let confirmed = true
        setTimeout(function(){
            if(confirmed){
                console.log('order is confirmed')
            }
            else{
                console.log('order is rejected')
            }
        },3000) 
    }) 
    myOrder.then(function(){
        console.log('order is prepared')
    }).catch(function(){
        console.log('order is rejected')
    })
    .finally(function(){
        console.log('order ended')
    })
}
orderFood()