/*  
Given a number like 159, add the digits repeatedly until you get a single number.
For instance, 1 + 5 + 9 = 15.
1 + 5 = 6.

159%10 => 9 + 5 + 1 = 15
*/

let addUntilOne = (n)=>{

    let result;
    if(n > 0 && n <= 9) result = n;
    else result = n%10 + addUntilOne(Math.floor(n/10))

    if(!(result > 0 && result <= 9)) return addUntilOne(result)
    else return result
}

console.log(addUntilOne(129))

