let arr = [5,2,8,3,4,2,4,8,8,8,8,2]

let mostFreqElement = (arr)=>{

    let count = new Array(Math.max(...arr) + 1).fill(0);
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        count[arr[i]]++
        if(count[i] > count[max]) max = i;
    }

    console.log(count[max]);

    return (max);
}

console.log(mostFreqElement(arr));