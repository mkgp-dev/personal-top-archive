import { caesarCipher } from "../src/functions";

describe('caesarCipher', () => {
    test.each([
        ['abc', 3, 'def'],
        ['xyz', 3, 'abc'],
        ['HeLLo', 3, 'KhOOr'],
        ['Hello, World!', 3, 'Khoor, Zruog!'],
        ['abc', 29, 'def'],
        ['', 5, ''],
        ['123 !?', 5, '123 !?'],
    ])('%p shift %p -> %p', (input, shift, expected) => {
        expect(caesarCipher(input, shift)).toBe(expected);
    });
});