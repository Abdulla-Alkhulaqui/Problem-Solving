/*  
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

let genaratePascal = (result,n)=>{
    let last = result[result.length -1]
    let newRow = new Array(last.length +1)
    newRow[0]=1
    newRow[newRow.length -1]=1

    for(let i = 1 ; i < newRow.length -1;i++){
        newRow[i] = last[i] + last[i-1]
    }

    result.push(newRow)

    if(result.length === n) return result
    else return genaratePascal(result,n)

}

let pascal = (n)=>{
    let result = [[1],[1,1]]

    if(n === 0) return []
    if(n === 1) return [[1]]
    if(n === 2) return result

    for(let i = 2 ; i < n;i++){
        let last = result[result.length -1]
        let newRow = new Array(last.length +1)
        newRow[0]=1
        newRow[newRow.length -1]=1

        for(let i = 1 ; i < newRow.length -1;i++){
            newRow[i] = last[i] + last[i-1]
        }

        result.push(newRow)
    }

    return result
    // else return genaratePascal(result,n);
}



let arr = [1,2,2,3,4,3]


for(let i = 0 ; i < arr.length; i++){
    for(let j = i+1 ; j < arr.length; j++){
        if(arr[i] === arr[j]){
            arr.splice(j,1)
        }
    } 
}

console.log(arr)