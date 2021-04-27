/*  
Given 3 sorted lists, find the intersection of those 3 lists.
  
print(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))

# [4]
*/
let aux = (arr2,arr3,N)=>{

    for(let i=0; arr2.length; i++){
        if(arr2[i] > N)return false;
        if(arr2[i] === N) break;
    }

    for(let i=0; arr2.length; i++){
        if(arr2[i] > N)return false;
        if(arr2[i] === N) return true;
    }
}

let intersection  = (arr1,arr2,arr3)=>{
    let result = []
    for(let i = 0; i < arr1.length ; i++){
        console.log("hi")
        if(aux(arr2,arr3,arr1[i])){
            result.push(arr1[i])
        }
    }
    return result;
}


let oneLineIntersection = (arr1,arr2,arr3)=>{

    let result = [arr1,arr2,arr3]

    result = result.reduce((arr1,arr2) => arr1.filter(x => arr2.includes(x)))
    return result
}


console.log(intersection([1, 2, 3, 4], [2, 4, 6, 8], [2,3, 4, 5]))
