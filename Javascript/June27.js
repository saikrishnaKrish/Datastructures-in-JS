//Arrays
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3



const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']



fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined


let arr=[].fill(0,1,5)
console.log(arr)


let a=new Array(5).fill(5);
console.log(a)



const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]





// ================

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
// =================


const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]

// ==============================

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
// =========================================
// ()=>{

// }

console.log(array1)
array1.sort((a,b)=>a-b)
console.log(array1)

array1.sort((a,b)=>b-a)
console.log(array1)


// combining two arrays into single array
let arr1=[1,2,4,5]
let arr2=[6,7,87,8,4]
let arr3=arr1.concat(arr2)
console.log(arr3)



let strin="Welcome to, Africa"
strin=strin.split(",")
console.log(strin)


// let strin="Welcome to, Africa"
// strin=strin.split("to")
// console.log(strin)



// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


const months = ['Jan', 'March', 'April', 'June',"July","August"];

// console.log(months.splice(2))
// console.log("spliced "+ months)

// console.log(months.splice(1,2))
// console.log(months)


months.splice(1, 0, 'Feb',"sep","oct","April");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]



//=====================================================

months.splice(2, 3, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
//===========================================================

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]


//===============================================

let arr =["a", "b", "c", "d", "e", "f"]

console.log(arr.slice(2))
console.log(arr.slice(2,4))

console.log(arr)


//Splice modifies the exisitng array
//slice wont modify the existing array ,
//  it returns a copy of the result
// methods
// sort ()---anonymous function

//foreach
//map
//filter
//reduce
//some
//findIndex




let arr =["a", "b", "c", "d", "e", "f"]

console.log(arr.join("-"))

arr.forEach((ee,index)=>{
        console.log(ee+"---"+index)
    
})
let res=""
let char = "#"

arr.forEach((ee,index)=>{
    if(index>0){
        res=res+char+ee
    }
    else{
        res+=ee
    }
})

console.log(res)
//======================================================
let arr =["a", "b", "c", "d", "e", "f"]

arr.map((ele,i,arr)=>{
        console.log(" ele "+ele+" index "+i,"arr "+arr[i])
})


let arr1=[2,3,56,7,788,88,8]
let res=0
let char = "#"
arr1.map((ele)=>res+=ele)
console.log(res)


arr1.map((ele,index)=>{

    if(index>0){
        res=res+char+ele
    }
    else{
        res+=ele
    }
})

console.log(res)

// forEach vs map



// filter --filter values based upon some criteria

let arr=[2,3,56,7,788,88,8]

// arr=arr.filter((ele)=>ele>8)
// console.log(arr)

//chaining
arr=arr.map((ele)=>ele*5)
.filter((ele)=>ele<500)
.sort((a,b)=>b-a)
console.log(arr)

//reduce
let arr=[2,3,56,7,788,88,8]
// redcue==> will aggregate values
let result = arr.reduce((acc,ele)=>acc*=ele,88)
console.log(result)
// map , filter ,reduce, sort
// All of them accepts anonymous function as a paramter

let arr=[2,3,56,7,788,88,8]
// arr=arr.some((ele)=>ele>7) //true
// console.log(arr.every((ele)=>ele>7)) 
console.log(arr.findIndex((ele)=>ele==788))
console.log( arr.find((ele)=>ele==7))

// =====================================================
let arr=[]//

let arr=new Array(5) // 5 memory allocations
console.log(arr)

// ===============================================
//Objects

