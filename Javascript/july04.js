// classees
// Inheritance
// prototypical Inheritance
// Asynchronous way of witing 
// async await
// closures
// .currying
// Promise
// ajax
// setTimeout
// setInterval


//Inheritance in protoype
// or Prototypical Inheritance


let arr= [12,3,5,6,7,7]

// console.log(arr.)


Array.prototype.sumArray = function () {
        // console.log(this)
        let res =0
        for(let i=0;i<this.length;i++){
            res =res+this[i]
        }
        return res
}


Array.prototype.myMax = function(){
        return  Math.max(...this)
}

console.log("max value ", arr.myMax())

console.log(arr.sumArray())

console.log(arr.__proto__)


Array===>
Boolean==>
Object-->
Number --->\


-------------------------------



Objects

let a =99
let num1 =new Number(999)
console.log(num1)
console.log(typeof num1)

console.log( typeof a)




// ==============================================================


//Synchronous way of execution
console.log("hi") 
console.log("hello")
console.log("how are you")
console.log("Good Day!!1")
console.log("Happy to see u all")


//Asynchronous way of execution
// setTimeout()
// setInterval()


function calSum(a,b){
    return a+b
}


console.log("Hi Jyoshna")
console.log("Abhinav came")
console.log(calSum(2,5))
console.log("Greeshma joined the class")

console.log("Hi Jyoshna")
console.log("Abhinav came")
setTimeout(()=>{
    console.log("Hey all! am from setTimeout ")
},1000)

console.log("Greeshma joined the class")


console.log("Before setTimeout")
let res = 0;
function calSum(a,b){
    return a+b
}
setTimeout(()=>{
    res = calSum(2,5)
    console.log(res)
},1000)

console.log(res)

console.log("after setTimeout")





console.log("Before setTimeout")
// let res = 0;
// function calSum(a,b){
//     return a+b
// }
setTimeout(()=>{
    // res = calSum(2,5)
    // console.log(res)
    console.log("am from Timeout!!")
},900) // its a timer
  
// console.log(res)
console.log("after setTimeout")


console.log("before setInterval")
setInterval(()=>{
    console.log("am from setInterval !!!")
},200) // after this time

// milliseconds
console.log("after setInterval")




//"before setInterval" --same
//"after setInterval"
//am from setInterval !!!
// =======================================







console.log("Before setTimeout")
let res = 0;
async function calSum(a,b){
    setTimeout(()=>{
        await res
    },1000)
    return a+b
}

res = calSum(2,5)
console.log( await res)

console.log("after setTimeout")


