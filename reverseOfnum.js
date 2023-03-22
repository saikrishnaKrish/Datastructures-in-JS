
//with recursion --O(n)
function revNum(num){
    if(num<10){
        return num
    }
    console.log(num)
    return (num%10)+""+(revNum(Math.floor(num/10))); 
  
}



// console.log(revNum(7892))


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