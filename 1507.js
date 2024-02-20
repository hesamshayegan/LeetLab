// 1507. Reformat Date


/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {


    const [dd, mm, yyyy] = date.split(' ');

    const monthsMap = 
        {
        "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
        "Jul": 7, "Aug": 8, "Sep": 9, "Oct":10, "Nov": 11, "Dec": 12
        };

    const day = dd.length < 4 ? '0' + dd.slice(0,1) : '' + dd.slice(0,2)

    const month = monthsMap[mm] < 10 ? '0' + monthsMap[mm] : '' + monthsMap[mm]

    return (yyyy+ '-' + month + '-' + day)

        
};