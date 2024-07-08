
//with recursion --O(n)
function revNum(num){
    if(num<10){
        return num
    }
    console.log(num)
    return (num%10)+""+(revNum(Math.floor(num/10))); 
  
}



console.log(revNum(7892))


//without recursion --O(n)

function revNum(num){
    let sum=0,last=0;
     while(num>0){
         last=(num%10);
         sum=sum*10+last;
         console.log(sum)
         num=Math.floor(num/10);
     }
     return sum
 }
 
//  console.log(revNum(7892))
 


//with recursion --O(n)
function reverseNumber(num) {
    if (num < 10) {
        return num;
    }
    const remainder = num % 10;
    const quotient = Math.floor(num / 10);
    return parseInt(remainder.toString() + reverseNumber(quotient).toString());
}



const a={
    a:[22,3,4,5,444,35],
    b:{
        a:"sai",
        b:{
            aa:"wew"
        },
        c:{
            a:1111
        }
    }
}

function flattenArray(arr){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        // console.log(arr[i])
        let elem=arr[i];
        if(Array.isArray(elem)){
            let smalleFlattenArr=flattenArray(elem);
            newArr.push(...smalleFlattenArr);
        }
        else{
            newArr.push(elem);
        }
    }
    return newArr
}

let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]]
console.log(flattenArray(input))





let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]]

for(let key in input){
    console.log(input[key])
}



var firstName = "Loki"
let cap = {
    firstName : "Steve",
    sayHi : function(){
        console.log("53", this.firstName);
        const subInner = () => {
            console.log("54", this.firstName);
            const iAmInner = ()=> {
                console.log("55", this.firstName);
            }
            iAmInner();
        }
        subInner();
    }
}
cap.sayHi();