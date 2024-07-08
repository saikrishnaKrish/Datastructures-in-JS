// Rotate the String k Times in the Left Direction . eg rotateK( 'javascript', 2 )=> vascriptja.


//Rotating K times
//Inp: string, K


// string.length  and K

//javascript
// avascriptj --1 time
//  vascriptja- 2 time

//stringlength === k ===> returns the same string
// stringlength > k ==>
        /// popping k chars and appending it back
//stringlength < leng = 5  k=10 

    ///  5 engough to rotate


    function RotateSring( inputString , k){
        inputString=inputString.split("")
       let strLength =inputString.length;
       let finalStr =""
   
           if(inputString=="" || inputString.length==1 || strLength==k ){
                   return inputString.join("")
               }
               if(strLength > k){
                   console.log(strLength,k)
                   let splittedVal = inputString.slice(0,k);
                   let remStr = inputString.slice(k);
                   finalStr=remStr.join("")+splittedVal.join("");
               }
               if(strLength < k){
                       let nTimes= k%strLength;
                       let splittedVal= inputString.slice(0,nTimes);
                       let remStr = inputString.slice(nTimes);
                       finalStr=remStr.join("")+splittedVal.join("");
               }
   
           return finalStr
   
   }   
   
   console.log(RotateSring("javascript",2))
   
   
   
   // let str="javascript"   //9 k=3
   // let rem = str.slice(0,3)
   
   // console.log(rem)
   // console.log(str)
   
   
   // let str="javascript" 
   // let rem=str.slice(4)
   // console.log(rem)
   
   
   
   // // javascript
   
   
   // console.log(14%5)