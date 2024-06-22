// 1. Types of functions in Javascript
// 	1. Function without params and with params.
// 	2. Function with and without return type.
// 	3. Function as an expression
// 	4. Arrow function
// 	5. IIFE(Immediately Invoking Function)
// 	6. Callbacks
// 	7. Nested Functions
// 2. Conditional Statements
// 	1. If
// 	2. If else
// 	3. If else if else
// 3. Switch





// Arrow function


//function inside a function or Nested Functions
function welcomeUser(){
    console.log("Good Day!!!")
    return function greetingUser(){
        return "Happy to See you here!!!"
    }
}


// ===========================================================




// Function as an expression
let add=function (a,b){
    //computed the value
return a+b;
}

console.log(add(22,35))


// ==========================================================

//Arrow function
const welcomeUser=()=>{
    console.log("Good Day!!!")
}
welcomeUser()
const welcomeUser=(username)=>{
    console.log("Good Day!!!" + username)
}

const welcomeUser=(username)=>  console.log("Good Day!!!" + username)
welcomeUser("greeshma","Jake")
console.log(welcomeUser("greeshma","Jake"))
const add = (num1,num2)=> num1+num2 
const sub = (num1,num2)=> num1-num2 
const mul = (num1,num2)=> num1*num2 

const checkEven = (num1)=> {
        if(num1%2==0){
            return true
        }
        return false
}

console.log(add(2,5))

console.log(checkEven(8))

// ==============================================================

// Anonymous Function 

    // function which doesnt have any name 
    // works like a normal function and returns the computed value or result

    ((a,...b)=>{
            console.log("Hello Guys!! Happy weekend!!!"+a+" "+b)
    })(222,233,4,45,44)

// ======================================================

// Nested functions

    // function inside a function is called Nested function.
function randomValue(){
    function fun1(){
        console.log("fun1")

        function fun2(){
            console.log("fun2")

               function fun3(){
                   console.log("fun3")
               }

               fun3()
        }

        fun2()
    }
    fun1()
 
}

randomValue()

// ===============================================================================

//Passing parameters inside nested functions

function getFirstName(fname){

    let lname="Technologies"
    
    function getLastName(lname){
            let msg= "we make Javascript easy to learn"

            function greetUSer(msg){
                    console.log("Hi " +fname + " "+lname +" " )
                    console.log(msg)
            }   
            greetUSer(msg)
    }
    getLastName(lname)
}


getFirstName("Sirish")

//==============================================================================


// callback function


    // function getting passed as a parameter to the another function, which internally 
            // compute some result and call the callback function

            
    function randomValue(cb){
        function fun1(){
            console.log("Inside fun1")
    
            function fun2(){
                console.log("Inside fun2")
    
                   function fun3(){
                       console.log("Inside fun3")
                   }
    
                   fun3()
            }
    
            fun2()
        }
        fun1()

            cb()

    }

    function cb(){
        console.log("Inside callback function")
    }

    
    randomValue(cb)


    // passing params

        let num1=77,num2=99;

    function calculator(num1,num2,cb){
            const add =(num1,num2)=> num1+num2;
            const mul=(num1,num2)=> num1*num2

          let res1=  add(num1,num2)
          let res2=  mul(num1,num2)

            cb(res1,res2)
    }


    function displayResult(value1,valu2){
        console.log("Result for add is "+value1+" for mul is "+valu2)
    }


    calculator(num1,num2,displayResult)


    // ==================================================================

    //conditional Statements

        //showing/displaying or hiding something will happen based on conditions
        
        /**
         *  checkEven
         *      is even ==> even number
         *          is odd==> odd number
         * ====================================
         * 
         * 
         *      if we have more money
         *          if amount > 10k
         *                     explore goa
         *                  more than 20k
         *                      explore Manali
         *          amount <10k
         *              hyderabad
         * 
         * ======================================
         * 
         * 
         * 
         * */ 


       const IsEven=(num1) => num1%2==0 // anonymous function 

        let num=90
            if(IsEven(num)){
                    console.log("Its a even number")
            }
            else{
                console.log("Its a odd number")
            }


        let amount =40000;


            if(amount>10000 ){
                    console.log("visit goa")
            }
            else if(amount >15000){
                console.log("visit manali")
            }
            else if(amount > 50000){
                console.log("visit paris")
            }
            else{
                    console.log("Stay in your own location")
            }




        let amount =40000;


        if(amount > 10000 && amount < 14999 ){
                console.log("visit goa")
        }
        else if(amount > 15000 && amount < 49999){
            console.log("visit manali")
        }
        else if(amount > 50000){
            console.log("visit paris")
        }
        else{
                console.log("Stay in your own location")
        }

    // ============================================================


    let input ="Thudkjejd"

    switch(input){
        case "Mon" : console.log("Monday"); break;
        case "Tue" : console.log("Tueday"); break;
        case "Wed" : console.log("Wednesday"); break;
        case "Thu" : console.log("Thursday");break
        case "Fri" : console.log("Friday");break;
        case "Sat" : console.log("Saturday");break;
        case "Sun" : console.log("Sunday"); break;
        default : console.log("yet another day")        
    }


    // ===========================================================


    function suggestUserBasedOnAmount(amount){

        if(amount > 10000 && amount < 14999 ){
            console.log("visit goa")
        }
        else if(amount > 15000 && amount < 49999){
            console.log("visit manali")
        }
        else if(amount > 50000){
            console.log("visit paris")
        }
        else{
                console.log("Stay in your own location")
        }
    }

    let amount=90000

    suggestUserBasedOnAmount(amount)
    suggestUserBasedOnAmount(1999)
    suggestUserBasedOnAmount(829299)
    suggestUserBasedOnAmount(30000)
//  ==================================================
 
// small small concepts ---helps to make complex systems

    //different ways of writing functions
        // passing with and without params
            //normal functions
            //anonymous functions
            //arrow functions
            //callback functions
        //conditional statements
            //if
            //if else
            //if else if else
            //switch
//=================================================


let arr=[2,33,44,5,555]

console.log(arr)
let x=24

//In  javascript everything is an object


    console.log(typeof 77)
    console.log(typeof arr)
    console.log(Array.isArray(x))






