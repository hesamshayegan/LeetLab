// 844. Backspace String Compare


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function(s, t) {

    // helper function
    var nextValidChar = function (str, index) {
        let backspace = 0;
        debugger;
        while (index >= 0) {

            if (backspace === 0 && str[index] !== "#") {
                break;
            } else if (str[index] == "#") {
                backspace += 1;
            } else {
                backspace -= 1;
            }

            index -= 1;
        }
        
        return index;
    };

    let index_s = s.length - 1;
    let index_t = t.length - 1;

    let char_s = "";
    let char_t = "";

    while (index_s >= 0 || index_t >= 0) {
        index_s = nextValidChar(s, index_s);
        index_t = nextValidChar(t, index_t);

        char_s = index_s >= 0 ? s[index_s] : "";
        char_t = index_t >= 0 ? t[index_t] : "";

        index_s -= 1;
        index_t -= 1;

        if (char_s !== char_t) {
            return false;
        }
    }

    return true;
};

// The ideas is to traverse the string from the last-right index to the left one
// in this way if I see any #, I just decrease the index (and uppdate the backspace 
// number to keep track of pounds (#), in case there are multiple #)