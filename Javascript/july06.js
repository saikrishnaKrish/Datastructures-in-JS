    //promises
    //try catch block
    //states in promises
    //methods with examples in promises

    
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
      


