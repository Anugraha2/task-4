//finding odd in array
//using anonymous function

var num = [1,2,3,4,5];
var total = function (num){
    let sum = 0;
  for(let i = 0; i<num.length; i++){
      sum += num[i];
        
      }
      console.log(sum);
  } 
   

total(num);


//using IIFE

var num1 = [6,7,8,9,10];
   
(function (){
    let sum1 = 0;
     for(var i = 0; i<num1.length; i++){
      sum1 += num1[i];
        
      }
     console.log(sum1);
    })

(num1);



//Using arrow function

var arr=[1,2,3,4,5,6];
const add1=arr.reduce((a,b)=>a+b);
console.log(add1);



