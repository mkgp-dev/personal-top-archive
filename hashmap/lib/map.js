export default class HashMap {
    constructor() {
        this.capacity = 16;
        this.load = 0.75;
        this.size = 0;
        this.buckets = Array.from({ length: this.capacity }, () => []);
    }

    // Implementation of load factor
    #resize() {
        const buckets = this.buckets;
        this.capacity *= 2;
        this.clear();

        for (const bucket of buckets) {
            for (const [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }

    hash(key) {
        let hash = 0;
        const prime = 31;

        for (let i = 0; i < key.length; i++) hash = prime * hash + key.charCodeAt(i) | 0;

        return hash >>> 0;
    }

    set(key, value) {
        const idx = this.hash(key) % this.capacity;
        const bucket = this.buckets[idx];

        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;

        // If load exceeded
        if (this.size / this.capacity > this.load) this.#resize();
    }

    get(key) {
        const idx = this.hash(key) % this.capacity;
        const bucket = this.buckets[idx];

        for (const pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return null;
    }

    has(key) {
        const idx = this.hash(key) % this.capacity;
        const bucket = this.buckets[idx];

        for (const pair of bucket) {
            if (pair[0] === key) {
                return true;
            }
        }

        return false;
    }

    remove(key) {
        const idx = this.hash(key) % this.capacity;
        const bucket = this.buckets[idx];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => []);
        this.size = 0;
    }

    keys() {
        const keys = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                keys.push(key);
            }
        }

        return keys;
    }

    values() {
        const values = [];
        for (const bucket of this.buckets) {
            for (const [_, value] of bucket) {
                values.push(value);
            }
        }

        return values;
    }

    entries() {
        const entries = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                entries.push(pair);
            }
        }

        return entries;
    }
}