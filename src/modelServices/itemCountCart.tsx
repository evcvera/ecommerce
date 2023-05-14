class ItemCountCart {
    updateMap(id: string, count: number) {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, number>(JSON.parse(mapStr)) : new Map<string, number>();

        const value = map.get(id) || 0;
        if (value + count >= 0) {
            map.set(id, value + count);
        }
        if (map.get(id) === 0) {
            map.delete(id);
        }

        localStorage.setItem('myMap', JSON.stringify(Array.from(map.entries())));
        return;
    }


    getElementCount(id: string): number {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map(JSON.parse(mapStr)) : new Map();

        const count = map.get(id) || 0;

        return typeof count === 'number' ? count : 0;
    }

    sumMapValues(): number {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, number>(JSON.parse(mapStr)) : new Map<string, number>();

        let sum = 0;
        const entries = map.entries();
        let nextEntry = entries.next();
        while (!nextEntry.done) {
            sum += nextEntry.value[1];
            nextEntry = entries.next();
        }
        return sum;
    }

    getMapKeys(): string[] {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, number>(JSON.parse(mapStr)) : new Map<string, number>();
        return Array.from(map.keys());
    }

}

const itemCountCart = new ItemCountCart();
export default itemCountCart;
