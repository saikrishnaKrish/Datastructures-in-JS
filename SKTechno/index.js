// // Function Definition
// function fn(param1) {
//     console.log("Hello world!", param1);
//     return "Returned value";
// }

// // Function Call
// let rVal = fn();

// console.log("Return value:", rVal);



// Object Definition
let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key: "hello"
}

// Loop through Object Properties
for (let key in cap) {
    console.log(key, " ", cap[key], " ", cap.key);
}


console.log(typeof this)


let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = function(){
            console.log("55",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();



let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const iAmInner = () => {
            console.log("55",this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();


var firstName = "Loki"
let cap = {
    firstName : "Steve",
    sayHi : () => {
        console.log("53", this.firstName);
        const iAmInner = () => {
            console.log("55", this.firstName);
        }
        iAmInner();
    }
}
cap.sayHi();


let obj={
    count:1,
    up:function(){
        this.count++
        return this.count
        // console.log(this.count)
    },
    dec:function(){
        this.count--
        console.log(this.count)
        return this.count
    }
}

console.log(obj.count)
console.log(obj.up())
console.log(obj.up())
console.log(obj.up())
console.log(obj.up())
console.log(obj.dec())
console.log(obj.dec())
console.log(obj.dec())



let arr = [1,3,4,56,7,7778,87];
console.log(arr)


Array.prototype.sum=function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum=sum+this[i]
    }
    return sum
}

console.log(arr.sum())



let arr = [1,3,4,56,7,7778,87];
console.log(arr)

Array.prototype.mul = function (){
    let res=1;
    for(let i=0;i<this.length;i++){
        res=res*this[i]
    }
    return res;
}

console.log(arr.mul())

////////////////////////////////////////////////////////////////



// console.log(obj1.getInfo())
// console.log(obj1.getInfo.call(obj2))


let obj1={
    name:"krishna",
    native:"Tadepalligudem",
    getInfo:function(...argue){
        console.log(this.name)
        console.log(argue)
        return `Hi there am ${this.name} from ${this.native}`
    }
}

let obj2={
    name:"Arjun",
    native:"Hyd"
}
// Object.prototype.callMethod = function(ObjectReqToBeInvoked,arg1){
//     let requestedFn = this;
//     ObjectReqToBeInvoked.requestedFn=requestedFn;
//      let result =  ObjectReqToBeInvoked.requestedFn(arg1);
//     delete ObjectReqToBeInvoked.requestedFn;
//     return result
// }

// console.log( obj1.getInfo.callMethod(obj2,"arg1"))




// Object.prototype.myApply = function(ObjectReqToBeInvoked,...args){
//         console.log(this);
//         let requestedFn = this;
//         ObjectReqToBeInvoked.requestedFn = requestedFn;
//         let result = ObjectReqToBeInvoked.requestedFn(...args);
//         delete ObjectReqToBeInvoked.requestedFn;
//         return result;
// }

// console.log(obj1.getInfo.myApply(obj2,["sao","krisj","ss"]))


Object.prototype.myBind = function(ObjectReqToBeInvoked,...args){
    // console.log(this);
    let requestedFn = this;
    return function(...args){
      return  requestedFn.call(ObjectReqToBeInvoked,...args)
    }
}

let res = obj1.getInfo.myBind(obj2)
console.log(res("argsq","qrdwd","qdwd"))



//==================================================================


let obj={

}



function outer() {
    let arrFn = [];
    for (var i=0;i<3;i++) {
        arrFn.push(function fn() {
            i++;
            console.log(i);
        })
    }
    return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();


// ================================================

function createEvenStack() {
    let items= [];
    return {
        push(item) {
            if (item % 2 == 0) {
                console.log("Is pushed");
                items.push(item);
            }
            else {
                console.log("Please input even value");
            }
        },
        pop() {
            return items.pop();
        }
    }; 
}
const stack = createEvenStack();
console.log(stack)
stack.push(10);
stack.push(5);
console.log(stack.items); // the items array is not exposed as a property of the stack object, so it returns undefined
// Output:
// Is pushed
// Please input even value
// undefined
