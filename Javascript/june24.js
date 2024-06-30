// June -24

//String methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//operators in javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators


console.log(4+4)
console.log(4*4)



//short hand notation
let a=5
a=a+5;
a+=5;

a-=5
a*=5
console.log(a)


// &&
// ||


3 &&  5


let isCheck=false
let isDoube =false

if(isCheck && isDoube ){

        console.log("Hi am from if condition")
}


if(isCheck || isDoube ){
    console.log("Hi am from or condition")
}




//Strings 


let Inst="Sirish"
//Strings are immutable in javascript
let Tech="Technologies"
console.log(Inst+Tech)
console.log(Inst.concat(Tech))


let n1=10001
let n2="12345"// String concatenation is happening
console.log(n1+n2)

let venue="Majestic Commercial Street"
console.log(venue.length)
console.log(venue.charAt(5))//based on index number returns the character
console.log(venue.includes("ti"))

// kalki movie
// ====  results is having the name it is going to return

console.log(venue.toLowerCase()) //converting to lowercase

console.log(venue.toUpperCase()) // convering to uppercase
console.log(venue.indexOf("i")) // retruns the first occurrence
console.log(venue.lastIndexOf("i")) // returns the index position of last occurrence


// character i to be replaced with ee

function replaceCharAtI(inputStr,inputChar,replaceChar){
    if(typeof inputChar==String){
        if(inputChar==""){
            return "InputChar should not be empty"
        }
        if(!(inputStr.includes(inputChar))){
            return "InputChar not available in input String"
        }
        inputStr=inputStr.replaceAll(inputChar,replaceChar) // proper logic
        return inputStr
    }
    return "input char should be a string"
}
  
let x = replaceCharAtI("SirsishTechnologies","i","ee")
console.log(x)

// let inp="SirsishTechnologies"


console.log(venue.search("gi"))
console.log(venue.trim())


let venue="Majestic Commercial Street"
console.log(venue.slice(7))


// slice vs splice// while dealing with arrays





const str1 = 'Saturday night  plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat',));
// Expected output: false



const str = 'Mozilla';

console.log(str.substring(1, 3));
// Expected output: "oz"

console.log(str.substring(2));
// Expected output: "zilla"
let v=1100

console.log(v.toString().toLowerCase())




// Arrays
    
    // [] --array
    // in javascript it is heterogenous, it will accept different data type elements
    // Javascript is a dynamically typed language
    // we are not going to restrict the input
    //ways of declaring an array
        // --- array elements can be combination of characters and string or numbers or boolean type  
    let arr=["2",3,true,"sai","tech"]
    console.log(arr)
    let arr1 = new Array("ee","222",222)
    console.log(arr1)

    // methods on arrays

    let arr2 = [1,2,3,5,65,6,6,6,6,]
    console.log(arr2)

    console.log(arr2[1]) //index number
    // array index starts with 0
    console.log("array length " + arr2.length)    
    let i=1
    console.log("i val",++i)
    console.log("i val",i++)// 2  ---> 3
    console.log("i val",i)
    console.log(i--)
    console.log(--i)
    i=i+1
    i+=5 // shorthand notation
    console.log(i)
    const str1 = 'Saturday night  plans';
    console.log(str1[12])

        // loops
            // -- loop is nothing but an iteration
                // --- we are going to interate for something
                //for a cause or occurrence of a character
                    // for checking something 

    //for loop 
    // Sytax --sytax means structure
    // for(initialization;
    //  condition;
    //  increment or decrement or multiply or div){
    // }
    
    //condition
    // 0 
    // 9
    //0<9 
    //1
    //1<9 --true
    //--block
    //2 
    //2<9
    //--enter the block
    // ---repeat till arr.length< input character

    // steps
        // ---initialization
            // ===checking the condition --true or false
            //  if true
                    // --enter the code block
                    // --complete the steps inside the block
            //do increment or decrement (i+=2)
                //  ===checking the condition --true or false
                 // --enter the code block
                    // --complete the steps inside the block
             //do increment or decrement (i+=2)
                //  ===checking the condition --true or false
                    // --enter the code block
                        // --complete the steps inside the block    

    // loop will be terminated after meeting a certain criteria or condition

    let arr2 = [1,2,3,5,65,6,6,6,6]
    for(  let i=0 ;;){
        console.log("index value "+i+" "+"value is "+ arr2[i])
        i+=5
    }


    // for(  let i=0 ;i< arr2.length;i++){
    //     console.log("index value "+i+" "+"value is "+ arr2[i])
    // }
    /// Accept inputString , inputchar and replaceChar 
    // as params and replace them 
    //"strieieieie"
    // e ===> a
    //using for loop


