import { calculator } from "../src/functions";

describe('calculator', () => {
    describe('add', () => {
        test.each([
            [2, 3, 5],
            [0, 0, 0],
            [-2, 3, 1],
            [1.2, 3.4, 4.6]
        ])('%p + %p = %p', (a, b, expected) => {
            Number.isInteger(expected)
                ? expect(calculator.add(a, b)).toBe(expected)
                : expect(calculator.add(a, b)).toBeCloseTo(expected, 10);
        });
    });

    describe('subtract', () => {
        test.each([
            [5, 2, 3],
            [0, 0, 0],
            [-2, -5, 3],
            [1.2, 0.2, 1.0]
        ])('%p - %p = %p', (a, b, expected) => {
            Number.isInteger(expected)
                ? expect(calculator.subtract(a, b)).toBe(expected)
                : expect(calculator.subtract(a, b)).toBeCloseTo(expected, 10);
        });
    });

    describe('multiply', () => {
        test.each([
            [3, 4, 12],
            [0, 99, 0],
            [-2, 5, -10],
            [1.5, 2, 3]
        ])('%p * %p = %p', (a, b, expected) => {
            Number.isInteger(expected)
                ? expect(calculator.multiply(a, b)).toBe(expected)
                : expect(calculator.multiply(a, b)).toBeCloseTo(expected, 10);
        });
    });

    describe('divide', () => {
        test.each([
            [10, 2, 5],
            [9, 3, 3],
            [-12, 4, -3],
            [1, 4, 0.25]
        ])('%p / %p = %p', (a, b, expected) => {
            Number.isInteger(expected)
                ? expect(calculator.divide(a, b)).toBe(expected)
                : expect(calculator.divide(a, b)).toBeCloseTo(expected, 10);
        });
    });

    test('divide by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
});