const getTotalOfNumberArr = (arr) =>
    arr.reduce((acc, cur) => acc += cur, 0)

const getAverageOfNumberArr = (arr, precision = 2) =>
    (getTotalOfNumberArr(arr) / arr.length)
        .toFixed(precision)

