// 1360. Number of Days Between Two Dates


/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
*/
var daysBetweenDates = function(date1, date2) {
    
    // one day in milliseconds
    const dayMill = 24 * 60 * 60 * 1000

    date1 = new Date(date1)
    date2 = new Date(date2)
    
    // devide by dayMill to obtain days
    return Math.abs((date1-date2)/ dayMill)

};