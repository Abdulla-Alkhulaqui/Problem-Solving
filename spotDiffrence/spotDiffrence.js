/*  
This question is asked by Google. You are given two strings, s and t which only consist of lowercase letters. t is generated by shuffling the letters in s as well as an additional random character. Return the letter that was randomly added to t if it exists, otherwise, return ' '.
Note: You may assume that at most one additional character can be added to t.

Ex: Given the following strings...

s = "foobar", t = "barfoot", return 't'
s = "ide", t = "idea", return 'a'
s = "coding", t "ingcod", return ' '


*/

let  sortString = string=> string.split('').sort().join('');
let isAnagram = (str1,str2) => sortString(str1) === sortString(str2);


let spotDiffrence = (s,t)=>{

    let temp = ""
    for(let i =0 ; i < t.length ; i++){
        temp = t.slice(0,i) + t.slice(i+1,t.length)
        if(isAnagram(s,temp)) return t[i];
    }
    return " "
}

console.log(spotDiffrence("coding","ingcod"))