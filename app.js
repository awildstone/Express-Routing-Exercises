const express = require('express');
const app = express();
const port = 3000;
const { NaNError, EmptyInput } = require('./errors');
const { convertStringToNum, findMean, findMedian, findMode } = require('./helper');

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/mean', function(req, res, next) {
    try {
        if (!req.query.nums) {
            throw new EmptyInput('A query of nums are required. Eg: ?nums=1,3,7,9', 400);
        }
        let stringNums = req.query.nums.split(',');
        let numsArray = convertStringToNum(stringNums);
        if (numsArray instanceof Error) throw new NaNError(numsArray.message, 400);

        let result = {response: {operation: 'mean', value: findMean(numsArray)}};
        return res.send(result)
        } catch (err) {
        next(err);
    } 
});

app.get('/median', function(req, res, next) {
    try {
        if (!req.query.nums) {
            throw new EmptyInput('A query of nums are required. Eg: ?nums=1,3,7,9', 400);
        }
        let stringNums = req.query.nums.split(',');
        let numsArray = convertStringToNum(stringNums);
        if (numsArray instanceof Error) throw new NaNError(numsArray.message, 400);

        let result = {response: {operation: 'median', value: findMedian(numsArray)}};
        return res.send(result)
        } catch (err) {
        next(err);
    } 
});

app.get('/mode', function(req, res, next) {
    try {
        if (!req.query.nums) {
            throw new EmptyInput('A query of nums are required. Eg: ?nums=1,3,7,9', 400);
        }
        let stringNums = req.query.nums.split(',');
        let numsArray = convertStringToNum(stringNums);
        if (numsArray instanceof Error) throw new NaNError(numsArray.message, 400);

        let result = {response: {operation: 'mode', value: findMode(numsArray)}};
        return res.send(result)
        } catch (err) {
        next(err);
    } 
});

/** error handler */
app.use(function(err, req, res, next) {
    let message = err.msg;
    let status = err.status || 500;
    return res.status(status).send(message)
});

/** run server */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });