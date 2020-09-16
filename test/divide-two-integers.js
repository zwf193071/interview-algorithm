import { assert } from 'chai';
import { divide } from '../src/divide-two-integers/divide-two-integers'

describe('interview-algorithm', function () {
    it('divide-two-integers', function () {
        assert.strictEqual(divide(10, 3), 3);
        assert.strictEqual(divide(10, -3), -3);
        assert.strictEqual(divide(-10, -3), 3);
    })
});