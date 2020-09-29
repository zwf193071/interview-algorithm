/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法一
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];
    return findMaxSubArray(nums, 0, nums.length -1);
};
function findMaxSubArray (nums, low, high) {
    if (low === high) return nums[low];
    let mid = Math.floor((low + high) / 2);
    let leftSum = findMaxSubArray(nums, low, mid);
    let rightSum = findMaxSubArray(nums, mid + 1, high);
    let crossSum = findMaxCrossSubArray(nums, low, mid, high);

    if (leftSum >= rightSum && leftSum >= crossSum) {
        return leftSum;
    } else if (rightSum >= leftSum && rightSum >= crossSum) {
        return rightSum;
    } else {
        return crossSum;
    }
}
function findMaxCrossSubArray (nums, low, mid, high) {
    let leftSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i = mid; i>=low; i--) {
        sum += nums[i];
        if (sum > leftSum) {
            leftSum = sum;
        }
    }
    let rightSum = Number.NEGATIVE_INFINITY;
    sum = 0;
    for (let j = mid + 1; j <= high; j++) {
        sum += nums[j];
        if (sum > rightSum) {
            rightSum = sum;
        }
    }
    return leftSum + rightSum;
}

// 解法二 Kadane's algorithm 即动态规划算法
var maxSubArray1 = function (nums) {
    let max_sum = cur_max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur_max = Math.max(nums[i], nums[i] + cur_max);
        max_sum = Math.max(cur_max, max_sum);
    }
    return max_sum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))