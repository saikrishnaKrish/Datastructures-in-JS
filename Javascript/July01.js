


let jsClass={
    students:{
            stu1:"Kishore",
            stu2:"Mounika",
            stu3:"Bhanu",
            stu4:"Devi",
    },
    className:"JavascriptClass",
    loc:"Sirish Tech"
}


let jsClass={
    className:"JavascriptClass",
    loc:"Sirish Tech",
    place:"Hyd"
}


console.log(jsClass)


for(let  key in jsClass){
    console.log("key "+ key + "value "+jsClass[key] )
}

// templateString
let InstituteName="SirishIT"    
// let string = "Hi All from " + InstituteName

  let ns =   `Hi All from ${InstituteName} ${2+2*5}`
  console.log(ns)
  
let jsClass={
    className:"JavascriptClass",
    loc:"Sirish Tech",
    place:"Hyd"
}
console.log(jsClass)
for(let  key in jsClass){
    console.log(`key  ${key} value ${jsClass[key]}` )
}
for(let  key in jsClass){
    console.log(`key  ${key} value ${jsClass.key}` )
}


// copy the contents inside an object 

let jsClass={
    className:"JavascriptClass",
    loc:"Sirish Tech",
    place:"Hyd"
}
let newObj = {...jsClass}  // copied contents from one object to another object
console.log("obj1")
console.log(jsClass)
console.log("obj2")
console.log(newObj)
newObj.loc="Banglore"
console.log("obj1")
console.log(jsClass)
console.log("obj2")
console.log(newObj)




//Shallow copy in Javascript
let jsClass={
    students:{
            stu1:"Kishore",
            stu2:"Mounika",
            stu3:"Bhanu",
            stu4:"Devi",
    },
    className:"JavascriptClass",
    loc:"Sirish Tech"
}

const newObj ={...jsClass} 
console.log("obj1")
console.log(jsClass)
console.log("obj2")
console.log(newObj)
newObj.students.stu3="Sravani"
newObj.students.stu4="Sravani"
console.log("obj1")
console.log(jsClass)
console.log("obj2")
console.log(newObj)


//shallow copy
let jsClass={
    students:{
            stu1:"Kishore",
            stu2:"Mounika",
            stu3:"Bhanu",
            stu4:"Devi",
    },
    className:"JavascriptClass",
    loc:"Sirish Tech"
}

let newObj1 = {}

Object.assign(newObj1,jsClass)
console.log(newObj1) 

newObj1.className="react"
newObj1.students.stu4="Satish"
console.log("jsclass")
console.log(jsClass)
console.log("newObj1")
console.log(newObj1)

// extending an object
let jsClass={
students:{
        stu1:"Kishore",
        stu2:"Mounika",
        stu3:"Bhanu",
        stu4:"Devi",
},
className:"JavascriptClass",
loc:"Sirish Tech"
}

console.log(jsClass)
jsClass.venue="Manjeera Mall"
jsClass.students.stu5="Jyoshna"
jsClass.students.stu6="Abhinav"
jsClass.Timings="9 AM"
console.log(jsClass)


let jsClass={
students:{
        stu1:"Kishore",
        stu2:"Mounika",
        stu3:"Bhanu",
        stu4:"Devi",
},
className:"JavascriptClass",
loc:"Sirish Tech"
}

//JSON-->Javascript Object Notation
console.log(JSON.stringify(jsClass)) // converts object to JSON format
let val=JSON.stringify(jsClass) //converts JSON string to Object
console.log(JSON.parse(val))
console.log(`string ${JSON.stringify(jsClass)}`)



//DEEP copy


let jsClass={
    students:{
            stu1:"Kishore",
            stu2:"Mounika",
            stu3:"Bhanu",
            stu4:"Devi",
    },
    
    className:"JavascriptClass",
    loc:"Sirish Tech"
    }

    let newObj={}


    newObj = JSON.parse(  JSON.stringify(jsClass) )
    console.log(newObj)

    
    let str = "stinrg"
    console.log(typeof str)    
    let n=1122
    console.log(typeof n)

const jsClass={

    
className:"JavascriptClass",
loc:"Sirish Tech"
}

jsClass.students.stu1="Irish"
console.log(jsClass)




const userDetails = {
    name: "John Doe",
    age: 14,
    status: {
      verified: false,
      method: Symbol(),
      title: undefined
    }
  };
  
  console.log(_.cloneDeep(userDetails));


