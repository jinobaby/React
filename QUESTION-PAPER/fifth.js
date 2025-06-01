function longestWords(sentence) {

    const words = sentence.split(" ")

    let longestWord = ""
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

// Example usage
const sentence = "I am learning MERN development";
console.log(longestWords(sentence));

