import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import Knight from "./lib/knight.js";

const parse = (array) => {
    const regex = /\[\s*(-?\d+)\s*,\s*(-?\d+)\s*\]/g;
    const pairs = [];

    let match;
    while ((match = regex.exec(array)) !== null) {
        pairs.push([Number(match[1]), Number([match[2]])]);
    }

    if (pairs.length !== 2) throw new Error('Invalid input.');

    return pairs;
};

const print = (path) => {
    const moves = path.length - 1;
    console.log(`=> You made it in ${moves} move${moves !== 1 ? 's' : ''}! Here's your path:`);
    for (const [row, column] of path) {
        console.log(`   [${row}, ${column}]`);
    }
};

async function main() {
    //const size = 10;
    const board = new Knight();

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true,
    });

    const ask = (query) => new Promise(res => rl.question(query, res));

    console.log(`Knights Travails: ${board.size}x${board.size} board`);
    console.log('Type two coordinates like: [3, 3], [4, 3]\n');

    while(true) {
        const move = await ask('> ');
        if (!move.trim()) break;

        try {
            const [start, end] = parse(move);
            const path = board.moves(start, end);
            if (!path) console.log('No path found.');
            else print(path);
        } catch(error) {
            console.error(error.message);
        }

        console.log();
    }

    rl.close();
}

const file = fileURLToPath(import.meta.url) === process.argv[1];
if (file) {
    main().catch(error => {
        console.error(error.message);
        process.exit(1);
    });
}