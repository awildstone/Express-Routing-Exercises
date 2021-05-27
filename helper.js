/** Method to convert an array of strings into an array of numbers.
 * If a string cannot be converted to a Number, throw a NaNError.
 * Else return an array of numbers.
 */

function convertStringToNum(arr) {
    let numsArr = [];
    for (let string of arr) {
        let num = +string;
        if (!+string) {
            return new Error(`${string} is not a number!`);
        }
        numsArr.push(num);
    }
    return numsArr;
}

/** Calculate the mean in an array of numbers. Return the mean. */
function findMean(arr) {
    let total = 0;
        for (let num of arr) {
            total = total + num;
        }
    return total / arr.length;
}

/** Calculate the median in an array of numbers. Return the median. */
function findMedian(arr) {
    let sortedArr = arr.sort(function(a, b) { return a - b});
    let middle = Math.ceil(sortedArr.length / 2);
    let median = (sortedArr.length % 2 == 0) ? ((sortedArr[middle] + sortedArr[middle - 1]) / 2) : sortedArr[middle - 1];
    return median
}

/** Calculate frequency count for an array of numbers.  */
function countFrequency(arr) {
    let counts = {};
    for (let num of arr) {
        if (num in counts) {
            counts[num] = counts[num] + 1;
        } else {
            counts[num] = 1;
        }
    }
    return counts
}

/** Calculate the mode in an array of numbers. Return the mode. 
 * With help from: https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
*/
function findMode(arr) {
    let counts = countFrequency(arr);
    let keys = Object.keys(counts);
    let highestVal = Math.max.apply(null, keys.map(x => counts[x]));
    //if the count is equal to the highest value, add the key to an array of modes (result)
    let mode = keys.reduce((result, key) => { if (counts[key] === highestVal){ result.push(+key); } return result; }, []);
    //if the array is only 1 item, return the value, else return array of multiple mode values
    mode.length === 1 ? mode = mode[0] : mode
    return mode
}

module.exports = {
    convertStringToNum,
    findMean,
    findMedian,
    findMode
}