// 205. Isomorphic Strings


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/

var isIsomorphic = function(s, t) {

    let seen = {}

    if (s.length !== t.length) {   
        return false
    }

    for (let i=0; i< s.length; i++) {
        
        let char = s[i]

        if (seen[char]) {

            if (seen[char] !== t[i]) {
                return false
            }

        } else {
            seen[char] = t[i]
        }

    }
    
    return true

};



// var isIsomorphic = function(s, t) {
    
//     if (s.length !== t.length) return false
    
//     let mapST = {}
//     let mapTS = {}

//     for (let i=0; i<s.length; i++) {

//         let c1 = s[i];
//         let c2 = t[i]

//         // check if the character exists in the map but 
//         // doesn't correspond to the previously registered character
//         if ((mapST[c1] && mapST[c1] !== c2) ||
//             (mapTS[c2] && mapTS[c2] !== c1)
//             ) {
//                 return false
//             }
        
//         // character insertion into two maps
//         mapST[c1] = c2
//         mapTS[c2] = c1 

//     }

//     return true

// }