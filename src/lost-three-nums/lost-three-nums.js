/**
 * @param {oldArr} 老数组
 * @return {lostArr} 丢失的数字组成的数组
 */
export function getLostThreeNums (oldArr) {
    const lostArr = [];
    const len = oldArr.length;
    const m = new Map();
    for (let i = 0; i < len; i++) {
        m.set(oldArr[i], 1);
    }
    for (let j = 1; j < (len + 4); j++) {
        if (!m.get(j)) {
            lostArr.push(j)
        }
    }
    return lostArr;
}