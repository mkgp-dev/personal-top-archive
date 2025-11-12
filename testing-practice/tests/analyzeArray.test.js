import { analyzeArray } from "../src/functions";

describe('analyzeArray', () => {
    test('base case', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

    test.each([
        [[5], { average: 5, min: 5, max: 5, length: 1 }],
        [[-3, -1, -7], { average: -11 / 3, min: -7, max: -1, length: 3 }],
        [[1.5, 2.5, 3.5], { average: 7.5 / 3, min: 1.5, max: 3.5, length: 3 }],
        [[0, 0, 0], { average: 0, min: 0, max: 0, length: 3 }],
    ])('analyzes %p', (array, expected) => {
        const result = analyzeArray(array);
        expect(result.average).toBeCloseTo(expected.average, 10);
        expect(result.min).toBe(expected.min);
        expect(result.max).toBe(expected.max);
        expect(result.length).toBe(expected.length);
    });

    test('empty array', () => {
        expect(() => analyzeArray([])).toThrow('Array must not be empty');
    });
});