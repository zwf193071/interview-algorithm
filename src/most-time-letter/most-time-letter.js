/**
 * @param {string} str
 * @return {string}
 */
// 解法一
function mostTimeLetter (str) {
    let res = "";
    let maxLen = 0;
    let getStr = "";
    while (!!str) {
        let oldStr = str;
        getStr = str.charAt(0);
        str = str.replace(new RegExp(getStr, "g"), "");
        let len = oldStr.length - str.length;
        if (len > maxLen) {
            maxLen = len;
            res = `${getStr}=${maxLen}`;
        }
    }
    return res;
}
let start = Date.now()
console.log(mostTimeLetter('abbaad'))
let end = Date.now()
console.log(`解法一耗时：${end - start}ms`)

// 解法二
function mostTimeLetter1(str) {
    let obj = {};
    let res = "";
    for (let i = 0, len = str.length; i < len; i++) {
        let char = str.charAt(i);
        if (obj[char]) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    let max = 0;
    for (let key in obj) {
        if (max < obj[key]) {
            max = obj[key];
        }
    }
    for (let key in obj) {
        if (max === obj[key]) {
            res = `${key}=${max}`;
        }
    }
    return res;
}
let start1 = Date.now()
console.log(mostTimeLetter1('abbaad'))
let end1 = Date.now()
console.log(`解法二耗时：${end1 - start1}ms`)
