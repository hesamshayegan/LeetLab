// 2409. Count Days Spent Together

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
*/

var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {

    let arriveAliceDate = new Date('2001-' + arriveAlice);
    let leaveAliceDate = new Date('2001-' + leaveAlice);
    let arriveBobDate = new Date('2001-' + arriveBob);
    let leaveBobDate = new Date('2001-'+ leaveBob);

    let maxArrival = new Date (Math.max(arriveAliceDate, arriveBobDate));
    let minLeave = new Date (Math.min(leaveAliceDate, leaveBobDate));

    if (maxArrival > minLeave) return 0;

    return Math.floor((minLeave - maxArrival)/(24*60*60*1000)) + 1

};