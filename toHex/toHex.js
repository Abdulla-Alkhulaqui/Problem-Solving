/*  
Given a non-negative integer n, convert the integer to hexadecimal and return the result as a string. Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF. Do not use any builtin base conversion functions like hex.

Here's an example and some starter code.

def to_hex(n):
# Fill this in.

print(to_hex(123))
# 7B

10 => A
11 => B
result [B,7] [7,B] => 7B

123%16 => 11
Math.floor(123/16) => 7
7%16 => 7
Math.floor(7/16) => 0


*/

let OnelineToHex = n => (n).toString(16).toUpperCase()


let hexRep = (arr)=>{

    for(let i = 0 ; i < arr.length; i++){
        if(!(arr[i] >= 0 && arr[i] <= 9)){
            arr[i] === 10?arr[i] = "A":
            arr[i] === 11?arr[i] = "B":
            arr[i] === 12?arr[i] = "C":
            arr[i] === 13?arr[i] = "D":
            arr[i] === 14?arr[i] = "E":
            arr[i] = "F"
        }
    }
}
let toHex =(n)=>{

    let result = []

    while(n != 0){
        result.push(n%16)
        n = Math.floor(n/16)
    }

    hexRep(result)

    return result.reverse().join('')
}
console.log(toHex(123))