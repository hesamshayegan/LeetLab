// 1817. Finding the Users Active Minutes

// approach 1
var findingUsersActiveMinutes = function(logs, k) {

    let freq = {}
    let res = new Array(k).fill(0)

    let seen = new Set()
    let logsUnique = []

    logs.forEach(log => {
        const key = log.join('-')
        if (!seen.has(key)) {
            seen.add(key)
            logsUnique.push(log)
        }
    })

    logsUnique.forEach(log => {
        freq[log[0]] = freq[log[0]] ? freq[log[0]] + 1 : 1
    })

    for (let id in freq) {

        const UAM = freq[id]
        res[UAM-1] += 1

    }

    return res 

};

// approach 2 
var findingUsersActiveMinutes = function (logs, k) {
    const arr = new Array(k).fill(0);
    const map = new Map();

    for (const [id, min] of logs) {
        if (!map.has(id)) {
        map.set(id, new Set([min]));
        } else {
        map.set(id, map.get(id).add(min));
        }
    }

    console.log(map)

    map.forEach((val) => {
        const idx = val.size - 1;
        arr[idx]++;
    });

    return arr;
};



/*

UAM:
id -> unique minutes where id performed actions
a min -> is counted once


answer[j] s.t. n. users whose UAM = j

id: 0
[0,5],[0,2] -> UAM = 2 -> answer[2] = 1

id: 1
[1,2], [1,3] -> UAM = 2 -> asnwer[2] = 1

answer[2] = 2
[0,2,0,0,0]


logs = [[1,1],[2,2],[2,3]], k = 4

id: 1
[1,1] -> UAM = 1 answer[1] = 1

id:2
[2,2], [2,3] -> UAM = 2 answer[2] = 1



*/