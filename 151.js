// 151. Reverse Words in a String


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    let trimmedS = s.trim()
    let reversedS = []
    let words = []
    let temp = ""

    for (let i=0; i<trimmedS.length; i++) {
        
        if (/[a-zA-Z0-9]/.test(trimmedS[i])) {
            temp += trimmedS[i]
            if (i === trimmedS.length-1) {
                words.push(temp)
            }
        } else if (trimmedS[i] === " ") {
            if (!temp) {
                continue
            } else {
                words.push(temp)
                temp = ""
            }     
        }
    }
    
    reversedS = words.reverse()
    return reversedS.join(" ")   
};