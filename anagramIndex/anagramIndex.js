/* Given 2 strings s and t, find and return all indexes in string s where t is an anagram.

('a|cdb|acdacb', 'abc')
# [3, 7]

acb => abc
bca => abc



*/

let sortString = (str => str.split("").sort().join(""))
let isAnagram = ((str1,str2)=> sortString(str1) === sortString(str2))


let anagramIndex = (s,t)=>{

    let lengthOfT = t.length;
    let temp = ""
    let result = [];
    for(let i =0 ; i< s.length; i++){
       temp =  s.slice(i,i+lengthOfT)
       if(isAnagram(temp,t)) result.push(i)
       temp = ""
    }
    return result
}


console.log(anagramIndex('acdbacdacb', 'abc'))


