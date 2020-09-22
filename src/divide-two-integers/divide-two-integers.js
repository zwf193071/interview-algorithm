// 解法一
export function divide (dividend, divisor) {
    const limit = Math.pow(2, 31);
    const [MIN_INT, MAX_INT, HALF_MIN_INT] = [-limit, limit - 1, -(Math.trunc(limit / 2))];
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
    if (dividend === MIN_INT && divisor === 1) {
        return MIN_INT;
    }
    const negative = (dividend < 0) ^ (divisor < 0); // 被除数和除数若都为正整数或负数，则negative为0，否则，negative为1
    divisor = divisor > 0 ? -divisor : divisor;
    dividend = dividend > 0 ? - dividend : dividend;
    let max_bit = 0;
    while (divisor >= HALF_MIN_INT && (divisor + divisor) >= dividend) {
        max_bit += 1;
        divisor += divisor;
    }
    let q = 0;
    for (let bit = max_bit; bit >= 0; bit--) {
        if (divisor >= dividend) {
            q -= (1 << bit); // 1 << bit，等同于1 * 2的bit次方
            dividend -= divisor
        }
        divisor = (divisor + 1) >> 1;
    }
    return negative ? q : -q;
};

function abs (num) {
    return num < 0 ? -num : num;
}

// // 解法二(leetcode上显示超时)
export function divide1(dividend, divisor) {
    const MAXV = Math.pow(2, 31) - 1;
    const MINV = -Math.pow(2, 31);
    if (dividend === 0) return 0;
    let flag = true;
    if (dividend * divisor < 0) flag = false;
    let dd = abs(dividend);
    let ds = abs(divisor);
    let num = 0;
    let tmp = ds;
    while (dd >= ds) {
        let m = 1;
        tmp = ds;
        while (dd > (tmp << 1)) {
            tmp = tmp << 1;
            m = m << 1; // multiplication means *n, << only means *2
        }
        num += m;
        dd -= tmp;
    }
    if (flag) {
        return num <= MAXV ? num : MAXV;
    } else {
        return -num >= MINV ? -num : MINV;
    }
}

// 解法三（该算法每次都以一倍的divisor进行叠加，算法效率不高，改进的算法见解法一）
function divide2(dividend, divisor) {
    const limit = Math.pow(2, 31);
    const [MIN_INT, MAX_INT] = [-limit, limit - 1];
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
    if (dividend === MIN_INT && divisor === 1) {
        return MIN_INT;
    }
    if (divisor === 0) {
        throw new Error('除数不能为0');
    }
    let res = 0;
    const negative = (dividend < 0) ^ (divisor < 0);
    dividend = abs(dividend);
    divisor = abs(divisor);
    while ((dividend -= divisor) >= 0) {
        ++res;
    }
    return negative ? -res : res;
}
// 备注：算法思想: 对dividend 循环减 divisor, 减一次res++, 直到刚好减为0或余数小于divisor.
