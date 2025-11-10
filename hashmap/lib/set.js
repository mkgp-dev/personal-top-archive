import HashMap from "./map.js"

export default class HashSet {
    constructor() {
        this.map = new HashMap();
    }

    set(key) {
        this.map.set(key, true);
    }

    has(key) {
        return this.map.has(key);
    }

    remove(key) {
        return this.map.remove(key);
    }

    length() {
        return this.map.length();
    }

    clear() {
        this.map.clear();
    }

    keys() {
        return this.map.keys();
    }

    entries() {
        return this.map.keys().map(key => [key]);
    }
}