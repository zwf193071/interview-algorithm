/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 解法一
var searchInsert = function (nums, target) {
    let index = 0;
    let len = nums.length;
    if (len === 0 || target < nums[0]) return 0;
    if (target > nums[len - 1]) return len
    for (let i = 0; i < len; i++) {
        if (nums[i] >= target) {
            index = i;
            break;
        }
    }
    return index;
};

// 解法二
var searchInsert = function (nums, target) {
    let i = nums.length - 1;
    while (i >= 0 && nums[i] >=target) {
        i -= 1
    }
    return i + 1;
}

// 解法三 simple binary search
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length;
    while (left != right) {
        let mid = parseInt((right + left) / 2);

        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

