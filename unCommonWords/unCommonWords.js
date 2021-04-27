/*  
This question is asked by Amazon. Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

Ex: given the following strings...


sentence1 = "the quick"
sentence2 = "brown fox"
return ["the", "quick", "brown", "fox"]
/////
sentence1 = "the tortoise beat the hare the tortoise lost to the hare"  [the - tortoise - hare]
sentence2 = "the tortoise lost to the hare"
return ["beat", "lost", "to"]
/////
sentence1 = "copper coffee pot"
sentence2 = "hot coffee pot"
return ["copper", "hot"]

*/

let uncommonWords = (sentenc1,sentence2)=>{
    let combainedSentences = (sentenc1 +" "+ sentence2).split(" ")
    let temp = []
    let result = []

    for(let i =0; i < combainedSentences.length; i++){
        if(temp.includes(combainedSentences[i]) && !result.includes(combainedSentences[i])){
            result.push(combainedSentences[i])
        }else{
            temp.push(combainedSentences[i])
        }
    }

    result.forEach(x => combainedSentences = combainedSentences.filter(z => z != x))

    return combainedSentences;
}

console.log(uncommonWords("copper coffee pot","hot coffee pot"))
