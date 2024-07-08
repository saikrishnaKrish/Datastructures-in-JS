 

// ===============================

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {

    speak() {
        super.speak()
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog("Mitzie");
  d.speak(); // Mitzie barks.
  


//===============================================
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      super.speak(); // Call the speak method of the superclass (Animal)
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog("Mitzie");
  d.speak(); // Output: Mitzie makes a noise.
             //         Mitzie barks.

//====================================

console.log(Math.sqrt(44))

function calcHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
  
  console.log(calcHypotenuse(3, 4));
  // Expected output: 5
  
  console.log(calcHypotenuse(5, 12));
  // Expected output: 13
  
  console.log(calcHypotenuse(0, 0));
  // Expected output: 0
  

console.log(Math.max(...[44,4,2,122,3,432,21,2]))

console.log(Math.min(...[44,4,2,122,3,432,21,2]))
console.log(Math.abs(-12))



//CEIL
console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7



//Floor
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6


// =================================================



let   students={
    stu1:"Kishore",
    stu2:"Mounika",
    stu3:"Bhanu",
    stu4:"Devi",
}


console.log(students.stu1)
console.log( Array.isArray(Object.entries(students)))
console.log( (Object.entries(students)))

for(let i in students){
    console.log(`key :${i}  value: ${students[i]}`)
}
// console.log(`key :${i}  value: ${students.i}`)

for(let  [key,value] of Object.entries(students)){
    if(students.hasOwnProperty(key)){
        console.log(`key :${key}  value: ${value}`)
    }
}


let   students={
    stu1:"Kishore",
    stu2:"Mounika",
    stu3:"Bhanu",
    stu4:"Devi",
}
console.log(students.hasOwnProperty('stu1'))

let   students={
    stu1:"Kishore",
    stu2:"Mounika",
    stu3:"Bhanu",
    stu4:"Devi",
}
console.log(students.hasOwnProperty('stu4y'))




let   students={
    stu1:"Kishore",
    stu2:"Mounika",
    stu3:"Bhanu",
    stu4:"Devi",
}

students.stu5= "Sai"

console.log(students)

console.log(Object.isExtensible(students))

Object.seal(students) //restricts the entension of an object  we cannot or delete an element
students.stu6= "Satish"
console.log(students)
console.log(Object.isExtensible(students)) 
// returns true if object is entensible otherwise false

let   students={
    stu1:"Kishore",
    stu2:"Mounika",
    stu3:"Bhanu",
    stu4:"Devi",
}
console.log(Object.isExtensible(students))

Object.seal(students) //restricts the entension of an object 
students.stu6= "Satish"
console.log(students)
console.log(Object.isExtensible(students)) 
console.log(delete students.stu1)
students.stu1="wiq"
console.log(students)
Object.freeze(students)
students.stu1="wiq222"
console.log(students)

/**
 * mutation/changes we can do on an object ->
 * 1. reassign -> const,
 * 2. create a prop -> object.preventExtension
 * 3. update and create -> Object.seal
 * 4. prevent create, update, delete -> Object.freeze
 */

let   students={
    stu1:"Kishore",
    stu2:"Mounika",
    stu3:"Bhanu",
    stu4:"Devi",
    stu4:"Devi1",
    stu52:"Devi234",
    stu44:"Devi45344r"
}



//Destructing an object 
let {stu1,stu4,stu52} = students
console.log( stu1,stu4,stu52) 

//arrays and object and primitive data types
console.log( Math.max(234,24))//max value
console.log( Math.min(234,24))
console.log( Math.sqrt(234)) 
console.log(Math.PI) //3.14
console.log(Math.ceil(5.6))//6
console.log(Math.floor(5.33)) //5
console.log(Math.round(5.3333,1))
console.log(Math.abs(3-6)) // it returns the difference between two values

//write a program to print max number and min number in an array
// --with methods or without methods
//take an array and multply every element by 5 times and store in it.
// [2,3,5,6] == [10,15..]

// divisble 100 --how many values divsible by 5
// ==return the count as well as the number.

// i=0 to 100
