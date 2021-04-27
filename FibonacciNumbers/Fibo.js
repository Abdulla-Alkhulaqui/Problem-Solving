/* 
The nth Fibonacci number and the first nth numbers 

1 1 2 3 5 8 
        fib(3)
         2
*/

let fibo = (n,array = [])=>{

    if(array[n] != null) return array[n]
    let result ;
    if(n <= 1) result = n
    else result = fibo(n-1,array) + fibo(n-2,array)

    array[n] = result

    return result
}


let fiboseq = (n)=>{

    let result = []
    for(let i = 1; i <= n; i++){
        result.push(fibo(i))
    }
    return result
}

console.log(fibo(108))


