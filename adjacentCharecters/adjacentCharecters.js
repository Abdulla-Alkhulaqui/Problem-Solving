/*  
Hi, here's your problem today. This problem was recently asked by Apple:

Given a string, we want to remove 2 adjacent characters that are the same, and repeat the process with the new string until we can no longer perform the operation.


# input: cabba
# After remove bb: caa
# After remove aa: c
# print c

*/

let checkadjacent = (str)=>{

    for(let i = 1; i < str.length ; i++){
        if(str[i-1] === str[i]) return i-1
    }
    return false
}

let removeAdjacent = (str)=>{

    while(checkadjacent(str) != false){
        console.log(str)
        str = str.slice(0,checkadjacent(str)) + str.slice(checkadjacent(str)+2)
    }
    return str
}

console.log(removeAdjacent("cabba"))