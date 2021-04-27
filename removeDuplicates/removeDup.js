/* 

1- with using an external array to keep track of each element 
2- with using a nested loop
3- Useing the set data structure 
4- filter method

[3,2,3,4,5,5] => [ 3, 2, 4, 5 ]

*/

let removeDup = (arr)=>{
    let temp = []

    for(let i=0; i < arr.length ; i++){
        if(temp.includes(arr[i])) arr.splice(i,1)
        else temp.push(arr[i])
    }

    return arr
}

let removeNestedLoop = (arr)=>{

    for(let i =0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]) arr.splice(j,1)
        }
    }

    return arr
}

let removeWithSet = (arr)=>{
    return [...new Set(arr)]
}

let removeFilter = (arr)=>{
    return arr.filter((x,index) => arr.indexOf(x) === index )
}

console.log(removeFilter([3,2,3,4,5,5]))