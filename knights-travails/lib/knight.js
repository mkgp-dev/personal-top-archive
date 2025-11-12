import Node from "./node.js";

export default class Knight {
    constructor(size = 8) {
        this.size = size;
        this.move = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];
    }

    #inbound([row, column]) {
        return row >= 0 && row < this.size && column >= 0 && column < this.size;
    }

    #validate([row, column]) {
        if (!Number.isInteger(row) || !Number.isInteger(column)) throw new Error('Coordinates must be integers.');
        if (!this.#inbound([row, column])) throw new Error(`Coordinates must be with the range of ${this.size - 1}.`);
    }

    #path(node) {
        const out = [];
        while (node) {
            out.unshift(node.position);
            node = node.prevNode;
        }

        return out;
    }

    moves(start, end) {
        this.#validate(start);
        this.#validate(end);

        const same = start[0] === end[0] && start[1] === end[1];
        if (same) return [start.slice()];

        const query = [new Node(start)];
        const visited = new Set([`${start[0]},${start[1]}`]);

        while (query.length) {
            const curr = query.shift();
            const [row, column] = curr.position;

            if (row === end[0] && column === end[1]) return this.#path(curr);

            for (const [defaultRow, defaultColumn] of this.move) {
                const nextRow = row + defaultRow;
                const nextColumn = column + defaultColumn;
                const next = [nextRow, nextColumn];
                const key = `${nextRow},${nextColumn}`;
                if (this.#inbound(next) && !visited.has(key)) {
                    visited.add(key);
                    query.push(new Node(next, curr));
                }
            }
        }

        return null;
    }
}