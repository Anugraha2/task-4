//finding odd in array
//using anonymous function

var num = [1,2,3,4,5];
var odd = function (num){
    let final = [];
  for(let i = 0; i<num.length; i++){
      if(num[i]%2==1){
        final.push(num[i]);
        
      }
  } 
console.log(final);    
};

odd(num);


//using IIFE

var num1 = [6,7,8,9,10];
   var final1 = [];
(function (){
    
     for(var i = 0; i<num1.length; i++){
      if(num1[i]%2==1){
          final1.push(num1[i])
        
      }
  } 
    console.log(final1);
})(num1);



//Using arrow function

let numberArray = [11,12,13,14,15];

let odd1=numberArray.filter((x) => {

return (x % 2 !== 0);
});
console.log(odd1);



