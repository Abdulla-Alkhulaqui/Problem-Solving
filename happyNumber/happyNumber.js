/*  
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:
Input: n = 19


Output: true
Explanation:
1 (2) + 9 (2) = 82
8 (2) + 2 (2) = 68
6 (2) + 8 (2) = 100
1 (2) + 0 (2) + 0 2 = 1
Example 2:

Input: n = 2
Output: false
*/

let createHappy = (n,result = [])=>{
    
    while(n != 0){
        result.push(Math.pow(n%10,2))
        n = Math.floor(n/10)
    }
    return result.reduce((acc,element)=> acc + element,0)
}


let isHappy = (n,array = [])=>{
    while(n != 1 && !array.includes(n)){
        array.push(n)
        n = String(n).split("")
        .reduce((acc,element)=> acc + Math.pow(element,2),0)
    }

    return n === 1
}

console.log(isHappy(2))