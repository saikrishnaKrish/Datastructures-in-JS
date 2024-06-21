let a=[2,4,6,67,66] //array

console.log(typeof a)
// IS there any way to find whether the input is array or not

// ============================================

//sytax --> structure

function funName(){

// return //optional
}

//function without params
function WelcomeUser(){
    console.log("welcome to Hyderbad")
    return true
}

 console.log( WelcomeUser())

 //function with Params
 
 WelcomeUser("Yogesh","greeshma","Tharun",2,66,4,56677 ) //arguments we are passing 


 function WelcomeUser(name,v1,v2,...rest)//params or parameters
 {
    console.log("welcome to Hyderbad "+name+" "+v1+" "+v2+" "+rest)
    
    return true
}

//Hoisting  --allocating the memory

console.log(a)
let a=22 // declared the value
console.log(a)


console.log(aa)
var aa=222
console.log(aa)


//homogenous
//heterogenous



// let array=["arri","rueu",333,355,6,0.3,true]
// console.log(array)
// console.log(array.splice(1,2))


// NaN --not a number

//function as an expression
let fun1=function sum(a,b){

    return a+b
}


console.log(fun1(23,4))

// function passing a parameter 
function Calculator(num1,num2,fun){ add
    console.log(num1,num2)

       return fun(num1,num2);
}

let add=function sum(a,b){
        //computed the value
    return a+b;
}


let z = Calculator(22,3,add)
console.log(z)

/**
 * 
 * add two numbers //basic function
 * Create a calculator function
 * prime number 
 * palindrome program
 * magic number
 * fib series
 * 

**/








let a = 10;
console.log("line number 2", a);

function fn() {
    let a = 20;
    console.log("line number 4", a);
    a++;
    console.log("line number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 11", a);
    }
    console.log("line number 13", a);
}

fn();
console.log("line number 16", a);




let fruits = "apple";
console.log(fruits); // apple

{
    console.log(fruits); // ReferenceError: Cannot access 'fruits' before initialization (Temporal Dead Zone - TDZ)
    let fruits; 
    console.log(fruits); // undefined
    fruits = "orange";
    {
        console.log(fruits); // orange
    }
    console.log(fruits); // orange
}

console.log(fruits); // apple



var fruits = "apple";
console.log("21", fruits); // apple

{ 
    let fruits;
    fruits = "orange";
    console.log("25", fruits); // orange
    {
        let fruits;
        console.log("28", fruits); // undefined
    }
    console.log(fruits); // orange
}
console.log(fruits); // apple








    // Declaring a normal function
    function greetings() {
        this.name="sai"
        console.log("Hello " + this);
    };
    greetings();
    
    
    //Declaring Function as an expression
    const greetings = () => console.log("Hello " + this);
    
    greetings(); 


//anonymous function
(()=>{
    console.log("HElloo Team")
})()



//function inside a function or Nested Functions
function welcomeUser(){
    console.log("Good Day!!!")
    return function greetingUser(){
        return "Happy to See you here!!!"
    }
}
    
let wMsg=welcomeUser()
console.log(wMsg())

//callback function
function randomValue(cb){
    function fun1(){
        console.log("fun1")
    }
    function fun2(){
        console.log("fun2")
    }
    function fun3(){
        console.log("fun3")
    }
    fun1()
    fun2()
    fun3()
    cb()
}

    function callback(){
        console.log("I am a callback function")
    }

randomValue(callback)