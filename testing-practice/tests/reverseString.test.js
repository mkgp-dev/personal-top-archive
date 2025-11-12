import { reverseString } from "../src/functions";

describe('reverseString', () => {
    test.each([
        ['hello', 'olleh'],
        ['racecar', 'racecar'],
        ['', ''],
        ['A', 'A'],
        ['123abc', 'cba321'],
        ['Hello, World!', '!dlroW ,olleH'],
    ])('%p -> %p', (input, expected) => {
        expect(reverseString(input)).toBe(expected);
    });
});