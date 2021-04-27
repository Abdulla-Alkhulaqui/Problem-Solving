/*  
Given an expression (as a list) in reverse polish notation, evaluate the expression. Reverse polish notation is where the numbers come before the operand. Note that there can be the 4 operands '+', '-', '*', '/'. You can also assume the expression will be well formed.

postfix => 23+ reverse polish notation
infix => 2+3
prefix => +23 polish notation

Input: [1, 2, 3, '+', 2, '*', '-']
        [1,5]
Output: -9
*/

let reversePN = (arr)=>{
    let stack = []
    let operands = ["/","*","-","+"]

    for(let i = 0 ; i < arr.length ; i++){
        if(operands.includes(arr[i])){
            let b = stack.pop()
            let a = stack.pop()

            arr[i] === "*"? stack.push(a*b): 
            arr[i] === "/"? stack.push(a/b): 
            arr[i] === "+"? stack.push(a+b):
            stack.push(a-b) 

        }
        else stack.push(arr[i])
    }

    return stack[0]

}

console.log(reversePN([1, 2, 3, '+', 2, '*', '-']))
