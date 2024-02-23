// 729. My Calendar I


var MyCalendar = function() {
    
    this.bookings = [];

};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
*/

MyCalendar.prototype.book = function(start, end) {


    for (const [s, e] of this.bookings) {
        if (start < e && end > s) {
            return false;
        }
    }

    this.bookings.push([start, end]);
    this.bookings.sort((a, b) => a[0] - b[0]);
    return true;


};