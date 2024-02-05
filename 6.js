// 6. Zigzag Conversion


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1) return s

    let res = ""

    for (let row = 0; row < numRows; row++) {

        let increment = 2 * (numRows - 1)
        
        for (let i = row; i < s.length; i += increment) {
                       
            res += s[i]

            // for middle rows (not the first or last one)
            if (row > 0 && row < numRows - 1 && 
                (i + increment - 2 * row) < s.length) {

                    res += s[i + increment - 2 * row]

                }   
        }

    }

    return res

};


/* "PAYPALISHIRING", n. rows = 4

P      i      N
A    L S    i
Y  A   H  R
P      i 

for first & last row
s[0] + 6 (= (numRows - 1) * 2) = i
s[4] + 6 = i

for middle rows:
row 2: (numRows - 1) * 2 - (2 * r) = (4-1) * 2 - (2*1) = 4 -> s[1] + 4 = L
row 3: (numRows - 1) * 2 - (2 * r) = (4-1) * 2 - (2*2) = 2 -> s[2] + 2 = A
...

*/