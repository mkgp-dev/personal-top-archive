import { capitalize } from "../src/functions";

describe('capitalize', () => {
    test.each([
        ['hello', 'Hello'],
        ['h', 'H'],
        ['', ''],
        ['hello world', 'Hello world'],
        [' a space at first', ' a space at first'],
        ['123abc', '123abc'],
    ])('%p -> %p', (input, expected) => {
        expect(capitalize(input)).toBe(expected);
    });
});