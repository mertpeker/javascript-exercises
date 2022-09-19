const sumAll = function(first, last) {
    let sum = 0;
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";
    if (first < 0 || last < 0) return "ERROR";
    if (first > last) {
        const temp = last;
        last = first;
        first = temp;
    }
    for (let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
