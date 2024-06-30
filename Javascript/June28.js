/*  
 what is an object
 ways to create an object
 How objects are stroed in memory
 Nested Objects
 creating a reusable Function which helps to create instances
 How to access values inside an object
 Comparing two objects
 passing params to functions inside object
 == vs ===
*/

let person={
    fname:"sai",
    lname:"krishna",
    getFName(){
        console.log("this"+this)
        return this.fname+this.lname;
    }
}

console.log(person.fname)
console.log(person.getFName())
console.log(person)


//Object ==== {}
// In js, everything is a Object
let obj = {}

console.log(typeof obj)

// key and value
//everything inside an object will be in the form of
//  key value pairs
// name:"Sirish"
//key can be a string or number 

//ways to create an object
let obj = {
    name:"Abinav",
    state:"Telangana",
    likes:["watching TV","listeneing songs"]
}


console.log(obj)


let newObj  =  new Object();

newObj.personName="Vennesa";
newObj.state="AndhraPradesh"
// console.log(newObj)

//Accessing a value in an Object
console.log(newObj["state"]) // preferred way
console.log(newObj.personName)
console.log(newObj.location) 
// undefined if any value is not available inside the object


// a  person name "Arjun" travelling locatio to another

// hyd to guntur

let user = {
    personName:"Arjun",
    currentLocation:"Hyd",
    destinationLocation:"Tirupati",
    ticketPrice:"800",
    startTime:"8:30PM",
    jobDetails:{
            job:"Software Engineer",
            location:"Banglore",
            likes:["playing cricket","watching Anime"],
            address:{
                landmark:"near cable bridge",
                state:"Banglore",
                rent:"2453 perday"
            }
    }
}

// Accessing a value object inside an object
console.log(user.personName)//
console.log(user.jobDetails.job)
console.log(user.jobDetails.address.state)


//--60seats---> 60 user details

function CreatePassengerDetails(personName,currentLocation,destinationLocation){  
    this.personName=personName
    this.currentLocation=currentLocation
    this.destinationLocation=destinationLocation
}

let user1 = new CreatePassengerDetails("Sravani","Hyd","Guntur")
let user2 = new CreatePassengerDetails("Srivalli","AP","Amalapuram")

console.log(user1)
console.log(user2)


console.log(6=="6") // Type conversion
console.log(typeof 6)
console.log(typeof "6")
console.log(6==="6") // It checks both type along with value

console.log(typeof user1=="object")



let a ={ "movieName":"Salar","hero":"Prabhas",3333:"23454"}
console.log(a)
console.log(a[3333])
let b=a;
console.log("b value",b)
b.movieName="radhe shyam"

console.log("b value") 
console.log(b)
console.log("a value")
console.log(a)


let a ={ "movieName":"Salar","hero":"Prabhas",3333:"23454"}

console.log(Object.keys(a))
let val = Object.keys(a) // returns the keys of an object
console.log(  Array.isArray(val))


console.log(Object.values(a)) // returns the values of an object


let a ={ "movieName":"Salar","hero":"Prabhas",3333:"23454"}
let a1 ={ "movieName":"Salar","hero":"Prabhas",3333:"23454"}
let b=a

console.log(Object.is(a,a1))
console.log(Object.is(a,b)) // its comparing the reference pointer
console.log( JSON.stringify(a)==JSON.stringify(a1)) // it is comparing two objects




let movieObj ={ 
    "movieName":"Salar", //properties
    "hero":"Prabhas",
    3333:"23454",
    getMovieDetails: function(){
        console.log(this.movieName)
        console.log(this.hero);
        console.log(this)
    },
    getHeroName: function (){
        return this.hero
    },
    greetAudienceByLocation: function(greetings){
        return greetings+" from "+movieObj.hero
    },
    getObjectValues : function(){
    return Object.values(this)
    }
}
//functions inside an object is called method
console.log(movieObj[3333])
console.log(movieObj.hero)
console.log(movieObj.getMovieDetails())
console.log(movieObj.getHeroName())
console.log(movieObj.greetAudienceByLocation("HOLA"))
console.log(movieObj.greetAudienceByLocation("Hello"))
console.log(movieObj.greetAudienceByLocation("How are you guys"))
console.log(movieObj.getObjectValues())
//arrays or ojects
//arrray and objects are reference type variable




// ===========================================
// call 
// apply 
// bind
//The value of this


// Function.prototype.call()
// The call() method of Function instances calls
//  this function with a given 
// this value and arguments provided individually.

//Syntax
// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, arg2)
// call(thisArg, arg1, arg2, /* …, */ argN)


let movieObj ={ 
    "movieName":"Salar", //properties
    "hero":"Prabhas",
    3333:"23454",
    getMovieDetails: function(){
        console.log(this.movieName)
        console.log(this.hero);
    },
    greetAudienceByLocation: function(greetings,directorName){
        return greetings+" from "+movieObj.hero +" "+this.movieName+" "+this.heroine+" "+directorName
    },
}

// console.log(movieObj.getMovieDetails())

let movieObj1 ={
    movieName:"Pushpa",
    hero:"Allu Arjun",
    heroine:"Rashmika"
}

// movieObj.getMovieDetails.call(movieObj1)

// let res = movieObj.greetAudienceByLocation.call(movieObj1,
//     "Wish you happy saturday","Sukumar","refre","erfef","g re")
// console.log(res)


// //apply
// The apply() method of Function instances calls 
// this function with a given this value, 
// and arguments provided as an array (or an array-like object).

// //Syntax
// apply(thisArg)
// apply(thisArg, argsArray)


// let res = movieObj.greetAudienceByLocation.apply(movieObj1,
//     ["Wish you happy saturday","Sukumar"])
// console.log(res)


// let ar =[1,23,4,5,6,67,7,7,8,89,9]
// console.log([...ar])

// let res = movieObj.greetAudienceByLocation.apply(movieObj1,
//     ["Wish you happy saturday","Sukumar"])

let arrr= ["Wish you happy saturday","Sukumar"]
let res = movieObj.greetAudienceByLocation.apply(movieObj1,arrr)
console.log(res)

//fixed length of args ==> call
//in case the args length is unknown 
// or dynamically will be passed by user 
// we want to pass them as a single value --> apply


//Bind
// The bind() method of Function 
// instances creates a new function that,
//  when called, calls this function with its 
//  this keyword set to the provided value,
//   and a given sequence of arguments preceding any
//    provided when the new function is called.


let movieObj ={ 
    "movieName":"Salar", //properties
    "hero":"Prabhas",
    3333:"23454",
    getMovieDetails: function(){
        console.log(this.movieName)
        console.log(this.hero);
    },
    greetAudienceByLocation: function(greetings,directorName){
        return greetings+" from "+this.hero +
        " "+this.movieName+" "+this.heroine+" "+directorName
    },
}

let movieObj1 ={
    movieName:"Pushpa",
    hero:"Allu Arjun",
    heroine:"Rashmika"
}

let gAByLoc = movieObj.greetAudienceByLocation.bind(movieObj1)

console.log(gAByLoc("Have a happy weekend","Rajamouli"))
console.log(gAByLoc("Have a happy Holiday","Sirish"))
console.log(gAByLoc("Have a happy weekend","Rajesh"))




 
    // Declaring a normal function
    function greetings() {
        this.name="sai"
        console.log("Hello " + this.name,);
    };
    greetings();
    
    
    //Declaring Function as an expression
    const greetings = () => console.log(this);
    
    greetings(); 
    




    //this --keyword
        // The value of this will be changed based on the Context.
        //Inside an function, which is inside object this always points to the current object
        //In case of anonymous, this points to the global object
        //In case of browser, this points to window object.
        //this is a KEYWORD, dont use this as a variable 
        //or change the value of this.
        //In event , this refers to the element that 
                // recieved the event
        // call, apply, bind ---> this refers to the object
        //Inside the function, this refers to global object