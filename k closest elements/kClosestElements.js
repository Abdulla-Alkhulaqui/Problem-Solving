/*  
Given a list of numbers, and two integers k and x, find k closest numbers to the pivot x.

([1, 3, 7, 8, 9], 3, 5)
# [3, 7, 8]

([2,4,1,7,3,8] , 3 ,5)
#[4,7,3]

*/

let KclosestElements = (arr,k,x)=>{
    return arr.sort((a,b)=> Math.abs(a-x)- Math.abs(b-x)).slice(0,k)
}


console.log(KclosestElements([1, 3, 7, 8, 9] , 3 ,5))