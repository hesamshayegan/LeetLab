// 824. Goat Latin



/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(S) {
    
    let words = S.split(' ');
        const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
        
        for (let i = 0; i < words.length; i++) {
            let firstChar = words[i][0];

            if (vowels.has(firstChar)) {
                words[i] = words[i] + "ma" + "a".repeat(i + 1);
            } else {
                words[i] = words[i].slice(1) + words[i][0] + "ma" + "a".repeat(i + 1);
            }
        }
        
        return words.join(' ');
}

