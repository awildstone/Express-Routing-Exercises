const { findMean, findMedian, findMode } = require('./helper');

describe('It returns the mean value from an array of numbers', function() {

    test('It finds the mean in an array of different numbers.', function() {
        expect(findMean([9,7,5.5,1.25,3])).toEqual(5.15);
    });

    test('It finds the mean in an array of same numbers.', function() {
        expect(findMean([7,7,7,7])).toEqual(7);
    });

});

describe('It returns the median value from an array of numbers', function() {

    test('It finds the median in an even numbered group.', function() {
        expect(findMedian([13,56,33,7])).toEqual(23);
    });

    test('It finds the median in an odd numbered group.', function() {
        expect(findMedian([13,56,33,7,67])).toEqual(33);
    });
});


describe('It returns the mode value or multiple mode values from an array of numbers', function() {

    test('It returns the single most frequent number.', function() {
        expect(findMode([6,7,6,5,3,2,6,7])).toEqual(6);
    });

    let expected = [6,7,5];
    test('It returns the mode as a nums array when there are multiple numbers tied for most frequent number.', function() {
        expect(findMode([6,7,6,5,3,2,7,5])).toEqual(expect.arrayContaining(expected));
    });
});