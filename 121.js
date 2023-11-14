// 121. Best Time to Buy and Sell Stock


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
        
        if (profit > maxProfit) {
            maxProfit = profit;
        }

        if (profit < 0) {

            // negative profit means I found a lower value so I want that 
            // to set that value to left as I'm looking for the max profit
            left = right

        }
        right++

        }

};