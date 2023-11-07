// 1304. Find N Unique Integers Sum up to Zero

/**
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function(n) {
    
    let res = [];
    let firstNum = Math.round(-n/2)
    if (firstNum === 0) {
        firstNum = 0
    }
    console.log(firstNum)

    while (firstNum <= n/2) {
        
        if (n % 2 === 0) {

            if (firstNum !== 0) {
              res.push(firstNum)
              firstNum++
            } else {
                firstNum++
            }
            
        } else {

            res.push(firstNum)
            firstNum++
            
        }
    }
    
    return (res)

};


// another solultion:

// var sumZero = function(n) {
//     var num = Math.floor(n/2); 
//     var res = [];
  
//     for(var i=1;i<=num;i++){
//         res.push(i,-i)
//        } 
  
//     if(n%2!==0){
//       res.push(0)
//     }
    
//     return res 
// }