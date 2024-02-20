// 937. Reorder Data in Log Files

/**
 * @param {string[]} logs
 * @return {string[]}
 */

const reorderLogFiles = (logs) => {
    let digitLogs = [];
    let letterLogs = [];

    for (let log of logs) {
        const [id, content] = splitStr(log);
        // check if it's a letter-log
        if (/^[a-z]/.test(content)) {
            letterLogs.push([id, content]);
        } else {
            digitLogs.push(log);
        }
    }

    // sort the letterLogs based on their content, lexicographically
    const sortedLetter = sortByContent(letterLogs);
    const joinedLetter = sortedLetter.map(log => log.join(" "));

    return joinedLetter.concat(digitLogs);
};

const splitStr = (str) => {
    const firstIndex = str.indexOf(' ');
    const id = firstIndex !== -1 ? str.slice(0, firstIndex) : str;
    const content = firstIndex !== -1 ? str.slice(firstIndex + 1) : "";
    return [id, content];
};

const sortByContent = (arr) => {
    return arr.sort((a, b) => {
        const contentComparison = a[1].localeCompare(b[1]);
        // if the contents are not equal
        if (contentComparison !== 0) {
            return contentComparison;
        }
        // otherwise sort based on their ids
        return a[0].localeCompare(b[0]);
    });
};