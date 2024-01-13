// 122. Best Time to Buy and Sell Stock II


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || prices.length <= 1) {
        return 0;
    }

    let left = 0;
    let right = left + 1;
    let maxProfit = 0;
   
    while (right < prices.length) {

        let profit = 0; 
        profit = prices[right] - prices[left];
        
        if (profit > 0) {
            maxProfit += profit;
            left = right
        }

        if (profit < 0) {

            left = right

        }
        right++

        }

    return maxProfit
};