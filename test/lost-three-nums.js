import { assert } from 'chai';
import { getLostThreeNums } from '../src/lost-three-nums/lost-three-nums'

describe('interview-algorithm', function () {
    it('lost-three-nums', function () {
        const arr = [5, 1, 6, 3, 7, 8, 10, 2, 4, 11, 20, 19, 17, 18, 15, 13, 12]
        const lostArr = getLostThreeNums(arr);
        assert.strictEqual(lostArr.length, 3);
        assert.deepEqual(lostArr, [9, 14, 16]);
    })
});