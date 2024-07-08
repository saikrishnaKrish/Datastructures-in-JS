


class InstituteName {

    constructor(courseName,studentName){
        this.courseName=courseName,
        this.studentName=studentName
    }
    get cName(){
        return this.courseName
    }
    set cName(cname1){
        this.courseName=cname1
    }
    get sName(){
        return this.studentName
    }
    set sName(studentName){
        this.studentName=studentName
    }

    getCourseDetails(){
        return `${this.courseName}   ${this.studentName}`
    }
}


class SirishTech extends InstituteName{
    constructor(courseName,studentName,branchName){
        super(courseName,studentName,branchName)
        this.branchName=branchName;
    }
    getLocation(){
        return  this.courseName+" "+this.branchName+" "+this.studentName
    }
}

let i= new InstituteName("Javascript","Jhansi")
let j= i.cName
console.log(j)
// console.log(i.getCourseDetails())
i.cName= "react"
console.log(i)
i.sName="Abhinav"
console.log(i)
let s=new SirishTech("Javascript","sai","CSE")
// console.log(i)
let xxx= s.getLocation()
console.log(xxx)

console.log(String.__proto__)


let candidate = {
    fly: true,
    Cantalk() {
        return "Sorry, Can't talk";
    },
    
};


let user = {
    CanCook: true,
    CanCode() {
        return "Can't Code";
    },
    //  Inheriting the properties and methods of candidate
    __proto__: candidate, 
};

console.log(user.__proto__)
console.log(user.fly)

console.log(user.Cantalk())
console.log(user.CanCode())

Object.defineProperty(user,'stude',{
    name:"sao",
    writable: true, // Property can be changed
    enumerable: true, // Property shows up during enumeration of the properties
    configurable: true // 
})
console.log(user.stude)




let a = [2,2,3,6,6,7,8,8,7]
let rem=0

for(let i=0;i<a.length;i++){
    rem= a[i]^ rem
}

console.log(rem)


let a=2,b=5;

a=a^b;
b=a^b;
a=a^b;
console.log(a,b);

let a=[2,4,6,4],b=[6,31,3,56];

[a, b]=[b, a];
console.log(a,b);




// // ================================
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

//===============================

// class - dataMembers + methods
//array
//object
// whenever we are going to make a datastructure
//  or any utility(reusable component or functionality)
// Array --a
// let a =new Array()
// method: A function wrapped inside a class is called Method

class InstituteName {
    constructor(courseName,studentName){
        this.courseName=courseName,  // data members
        this.studentName=studentName
        console.log("this value")
        console.log( this)
    }
    getCourseDetails(){ //methods
        return `${this.courseName} and  ${this.studentName}`
    }
    addNewCourseDetails(courseName,Instructor){
        return `course name is${courseName} and ${Instructor}`
    }
}
let oww =new InstituteName("Javascript","sai")
console.log(oww)
let x = oww.getCourseDetails()
console.log(x)
let wy =oww.addNewCourseDetails("React","siritsh")
console.log(wy)

let a =new Array(1,23,56,78,4)
console.log(a)

//Inheritance 
//Extending the extending object 
//inheriting the properties of an class 

InstituteName
this.courseName=courseName,  // data members
this.studentName=studentName
getCourseDetails()
addNewCourseDetails()

SirishIT extends InstituteName   -->s1-->this

this.courseName=courseName,  // data members
this.studentName=studentName
getCourseDetails()
addNewCourseDetails()
    ==> CourseName
    ==> InstructorName
    ==> CoursePrice
    ==> CourseDuration
    ==> getCourseDetails()
    ==> getCoursePrice()
    ==> getCourseDuration()
    ==> getInstructorDetails()


SirishIT <--- InstituteDetails
UDEMY_IT <--- InstituteDetails
YOUTUBE_IT <--- InstituteDetails


// extends --using this we can implement inheritance

class InstituteName {
    constructor(courseName,studentName){
        this._courseName=courseName,  // data members
        this._studentName=studentName
        console.log("this value")
        console.log( this)
    }
    getCourseDetails(){ //methods
        return `${this.courseName} and  ${this.studentName}`
    }
    addNewCourseDetails(courseName,Instructor){
        return `course name is${courseName} and ${Instructor}`
    }
}



class SirishIT  extends InstituteName {
        constructor(courseName,studentName,
            batchType,isRecordingExist){ //initialization
            super(courseName,studentName)
            this._batchType =batchType,
            this._isRecordingExist =isRecordingExist
        }
        getCourseDetails(){
             return `Batch Type ${ this._batchType}  and 
             isRecording Exist ${this._isRecordingExist} 
             CourseName ${this._courseName} studentName ${this._studentName}`
        }
}   

let s1 =new SirishIT("Javasript","Sai","Online",true)
console.log(s1)
let s2= s1.getCourseDetails()
console.log(s2)


// create a datatype name MyArray 
// --- it should accept values and have the methods like PUSH,POP,SHIFT,UNSHFT,
// arr.length