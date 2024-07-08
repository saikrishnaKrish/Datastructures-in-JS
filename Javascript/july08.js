//closurs
//currying
//NAN
//Default values
//Destructring value in array
//rest vs spread
// ======================================
// localStorage vs sessionStorage 
// BOM objects
// =======================


// Default values
function Multiply(num=10,num2=20,num3,num4){
    return num *num2*5
}

console.log(Multiply())
console.log(Multiply(20)) 

//... Destructing in arrays.
function Multiply(num=10,...args){ //Rest operator
    console.log(args)
    let  [num2,num3,...values] = args //array destructuring.
    console.log("num2",num2,"num3",num3)
    console.log("remaining values",values)
    return num *num2*5
}
let x = Multiply(20,30,49,299,2,4,35,3,4)

console.log(x)
Multiply()


// NaN --Not a number
// ==>

console.log(1/0)


//NAN
function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  
  console.log(sanitise('1'));
  // Expected output: "1"
  
  console.log(sanitise('NotANumber'));
  // Expected output: NaN
  


//   closures
let num2=567890
console.log(num2)

// Closures
// A closure is the combination of a function 
// bundled together (enclosed) with references
//  to its surrounding state (the lexical environment). 
//  In other words,
//   a closure gives you access to an outer function's scope
//    from an inner function. In JavaScript,
//     closures are created every time 
// a function is created, at function creation time.


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  } 
  init();
  

function fun1(){
    let count=11;

    function fun2(){
        count++;
        console.log(count)
    }
   return fun2
}


let v1 = fun1();
v1()
v1()
v1()
v1()
v1()
v1()
v1()


//currying 
function fun2(p1,p2, p3){
    return p1+p2+p3
}

console.log(fun2(20,34,6))

function welcomeUser(func){
        return function firstName(fname){
            return function lastName(lname){
                   return func(fname,lname)
                // return "Have a good day "+ fname+" "+lname
            }
        }
}

function greetUser(fname,lname){
    // console.log("Have a good day",fname,lname)
    return "Have a good day "+ fname+" "+lname
}
//1 way 
let greetMsg = welcomeUser(greetUser);
let firstName = greetMsg("Sai")
let lastName= firstName("pavan")
console.log(lastName)
let lname= firstName("Krishna")
console.log(lname)
//2 way
console.log(welcomeUser(greetUser)("sai")("pavan"))
console.log( welcomeUser(greetUser)("Srisih")("Technologies"))
console.log( welcomeUser(greetUser)("Bhanu")("Prakash"))