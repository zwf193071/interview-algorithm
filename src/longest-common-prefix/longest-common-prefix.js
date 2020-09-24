// 解法一 Horizontal scanning
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    let prefix = strs[0];
    for (let i = 1, len = strs.length; i < len; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (!prefix) return "";
        }
    }
    return prefix
}

// 解法二 Vertical scanning
var longestCommonPrefix1 = function (strs) {
    if (!strs || !strs.length) return "";
    for (let i = 0; i < strs[0].length; i++) {
        let c = strs[0].charAt(i);
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j].charAt(i) !== c) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}


// 解法三 Divide and conquer
var longestCommonPrefix2 = function (strs) {
    if (!strs || !strs.length) return "";
    return searchCommonPrefix(strs, 0, strs.length - 1);
}
function searchCommonPrefix(strs, l, r) {
    if (l === r) return strs[l];
    let mid = parseInt((l + r) / 2);
    let lcpLeft = searchCommonPrefix(strs, l, mid);
    let lcpRight = searchCommonPrefix(strs, mid + 1, r);
    return commonPrefix(lcpLeft, lcpRight);
}
function commonPrefix(left, right) {
    let min = Math.min(left.length, right.length);
    for (let i = 0; i < min; i++) {
        if ( left.charAt(i) !== right.charAt(i)) {
            return left.substring(0, i);
        }
    }
    return left.substring(0, min);
}

