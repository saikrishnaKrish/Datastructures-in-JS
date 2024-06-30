// call 
// apply 
// bind
//The value of this
// why JS is important to learn


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



        // We use call when we want to borrow a method only once with a defined number of parameters.
        // We use apply when we want to borrow a method only once with n number of parameters.
        // We use bind when we want to use a method multiple times and we want to make a permanent copy of that method.
        