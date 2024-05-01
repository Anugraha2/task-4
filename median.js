//anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    let ans =[];
    let final =[];
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 ans = arr[Math.round(len/2)-1];
 final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
final = ans;

}
console.log(final);
};
var arr1 = [1,2,3,4,5,6];
var arr2 = [7,8,9,10,11];
median(arr1,arr2);

//using IIFE

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){
   
let arr = [...arr1, ...arr2];
let ans =[];
let final =[];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 ans = arr[Math.round(len/2)-1];
 final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);