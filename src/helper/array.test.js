import { isArrayEmptyOrUndefined } from './array';

test('isArrayEmptyOrUndefine returns true if the array is empty or undefined', () => {
    expect(isArrayEmptyOrUndefined([])).toBe(true);
    expect(isArrayEmptyOrUndefined(undefined)).toBe(true);
});

test('isArrayEmptyOrUndefine returns false if the array is not empty', async () => {
    expect(isArrayEmptyOrUndefined([1])).toBe(false);
});
