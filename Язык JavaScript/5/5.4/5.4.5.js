let arr1 = [-1, 2, 3, -9];
let arr2 = [2, -1, 2, 3, -9];

function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (const elem of arr) {
        currentSum += elem;
        maxSum = Math.max(maxSum, currentSum);
        if(currentSum < 0) currentSum = 0;
    }

    return maxSum;
}

console.log(getMaxSubSum(arr2))




