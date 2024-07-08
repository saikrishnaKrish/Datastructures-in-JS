// async await
// closures
// .currying
// Promise
// ajax
// setTimeout
// setInterval



///CALL stack 


console.log("am before fun call")
function fun1() {
    console.log("am from fun1")
    function fun2() {
        console.log("am frm fun2")
    }
    function fun3() {
        console.log("am frm fun3")
        function fun4() {
            console.log("am frm fun4")
        }
        fun4()
    }
    fun2()
    fun3()
    console.log("am frm fun5")
}
fun1()
console.log("am after execution")

//==================================================

// am before fun call
//"am frm fun4"
// am frm fun2
//am frm fun3"
//"am frm fun5"
//am after execution"
//====================================
// am before fun call
// "am from fun1"
//"am frm fun4"
//"am frm fun2"
// "am frm fun3"
// "am frm fun5
// am after execution"
// =========================================

console.log("am before fun call")
function fun1() {
    console.log("am from fun1")
    function fun2() {
        console.log("am frm fun2")
    }
    function fun3() {
        fun4()
        console.log("am frm fun3")
        function fun4() {
            console.log("am frm fun4")
        }
    }
    fun2()
    fun3()
    console.log("am frm fun5")
}
fun1()
console.log("am after execution")

//order of execution --->LAST IN FIRST OUT










//clearTimeInterval=== for stopping setTimeInterval
//clearTimeout ---> setTimeout

console.log("Before setTimeout")

let id = setTimeout(() => {
    console.log("am from Timeout!!")
}, 200) // its a timer

setTimeout(() => {
    clearTimeout(id)
}, 500)

console.log("after setTimeout")
console.log("before setInterval")
let cid = setInterval(() => {
    console.log("am from setInterval !!!")
}, 200) // after this time

// milliseconds
console.log("after setInterval")
setTimeout(() => {
    clearInterval(cid)
}, 2000)



function fun1(value, callback) {
    let res = 0
    for (let i = 0; i < value; i++) {
        res = res + i;
    }
    console.log(res)
    callback()
}

function fun2() {
    console.log("am from fun2")
}

fun1(1000, fun2)


// await -await --
// async
async function makeApiCall() {

    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    // console.log(data)
    if (data.status == 200) {
        const result = await data.json()
        console.log(result)
    }
}
makeApiCall()

// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait 
// for a resolved promise before it continues:

// let value = await promise;


// [
//     { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//     {
//       userId: 1,
//       id: 2,
//       title: 'quis ut nam facilis et officia qui',
//       completed: false
//     },
//     { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false },
//     { userId: 1, id: 4, title: 'et porro tempora', completed: true },
//     {
//       userId: 1,
//       id: 5,
//       title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 6,
//       title: 'qui ullam ratione quibusdam voluptatem quia omnis',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 7,
//       title: 'illo expedita consequatur quia in',
//       completed: false
//     },
//     {
//       userId: 1,
//       id: 8,
//       title: 'quo adipisci enim quam ut ab',
//       completed: true
//     },
//     {
//       userId: 1,
//       id: 9,
//       title: 'molestiae perspiciatis ipsa',
//       completed: false
//     }]


//Promises
// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// myPromise.state	myPromise.result
// "pending"	undefined
// "fulfilled"	a result value
// "rejected"	an error object






let p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("resolved")
    }, 200)

    setTimeout(() => {
        reject("rejected")
    }, 600)
})

console.log(p2)




// try catch block

console.log(Math.random() * 10)

let p1 = new Promise((resolve, reject) => {
    try {
        // let num=Math.random()*10 >8
        let num = 8
        //  random 
        if (Math.random() * 10 > 8) {
            resolve("num is greater  than 8")
        }
        else {
            resolve("num is less than 8")
        }
    }
    catch (e) {
        reject("promise has been failed to do taks!!!")
    }

})

p1.then(
    (res) => console.log(res),
    (error) => console.log(error)
)



// The Promise.all() static method takes an iterable 
// of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's 
// promises fulfill (including when an empty iterable is passed), 
// with an array of the fulfillment values.
//  It rejects when any of the input's promises rejects,
//  with this first rejection reason.


const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

const promise1 = Promise.reject("promise has failed");

Promise.all([promise2, promise3, promise1])
.then((res) => console.log(res),
    (error) => console.log(error));
// Expected output: Array [3, 42, "foo"]




// The Promise.allSettled() static method takes
//  an iterable of promises as input and returns
//   a single Promise.This returned promise fulfills 
//   when all of the input's promises settle 
//   (including when an empty iterable is passed),
//    with an array of objects that describe the outcome 
//    of each promise.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, 'foo'),
);
const promise3 = Promise.resolve(29393)

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then((results) =>
    results.forEach((result) => console.log(result.status,result)),
);

 // Expected output:
// fulfilled
// rejected
// fulfilled





const data = Promise.race([
    fetch("/api"),
    new Promise((resolve, reject) => {
      // Reject after 5 seconds
      setTimeout(() => reject(new Error("Request timed out")), 5000);
    }),
  ])
    .then((res) => res.json())
    .catch((err) => displayError(err));
  


    // The Promise.any() static method takes an 
    // iterable of promises as input and returns a single Promise. 
    // This returned promise fulfills when any of the input's 
    // promises fulfills, with this first fulfillment value.
    //  It rejects when all of the input's promises reject
    //   (including when an empty iterable is passed), 
    //   with an AggregateError 
    // containing an array of rejection reasons.

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve,reject) => 
    setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve,reject) =>
     setTimeout(reject, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then(
    (value) => console.log(value),
    (error)=>console.log(error));

// Expected output: "quick"



// The Promise.race() static method takes an
//  iterable of promises as input and returns 
//  a single Promise. This returned promise settles 
//  with the eventual 
// state of the first promise that settles.

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 500, 'one');
      });
      
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'two');
      });
      
      Promise.race([promise1, promise2]).then((value) => {
        console.log(value);
        // Both resolve, but promise2 is faster
      });
      // Expected output: "two"
      

    //   Promise---
    //   all --all promises has to be settled 
    //   allSettled --returns array of results for each promise
    //   any---any of the promise of success
    //   race --- waits for the first promise to be resolved



