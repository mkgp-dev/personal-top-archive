export const capitalize = (str) => {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}

export const reverseString = (str) => {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error('Cannot divide by zero.');
        return a / b;
    }
};

export const caesarCipher = (str, shift) => {
    const norm = ((shift % 26) + 26) % 26;
    const shiftChar = (ch) => {
        if (!/[a-z]/i.test(ch)) return ch;
        const base = ch === ch.toUpperCase() ? 65 : 97;
        const code = ch.charCodeAt(0) - base;
        return String.fromCharCode(((code + norm) % 26) + base);
    };

    return [...str].map(shiftChar).join('');
};

export const analyzeArray = (array) => {
    if (array.length === 0) throw new Error('Array must not be empty.');
    const sum = array.reduce((a, b) => a + b, 0);
    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
};