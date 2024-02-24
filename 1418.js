// 1418. Display Table of Food Orders in a Restaurant


/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {

    let ordersArray = []

    let outputArray = []

    // store all foods in array
    for (const order of orders) {
        ordersArray.push(order[2])
    }

    // sort alphabetically
    ordersArray.sort()

    // create a set to avoid duplication
    let orderSet = new Set([...ordersArray])

    let hashTable = {}
    
    for (let i=0; i<orders.length; i++) {

        if (!hashTable[orders[i][1]]) {
            
            hashTable[orders[i][1]] = Array(orderSet.size).fill(0)

            // [table number]      [index of food item refere to orderSet Array]
            hashTable[orders[i][1]][Array.from(orderSet).indexOf(orders[i][2])] = 1

        }
        else {
            hashTable[orders[i][1]][Array.from(orderSet).indexOf(orders[i][2])] += 1
        }
    }

    let foodArray = ["Table", ...Array.from(orderSet)]
    outputArray.push(foodArray)

    for (let table in hashTable) {

        let arr = [table]

        for (let num of hashTable[table]) {
            arr.push(num.toString())
        }
        outputArray.push(arr)
        arr = []
    }

    return outputArray

}