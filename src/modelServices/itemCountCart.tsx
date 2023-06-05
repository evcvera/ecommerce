import {IItemLocalStorage, IProductCountAndTotal} from "../models/interfaces/iItemLocalStorage";

class ItemCountCart {
    updateMap(id: string, count: number, title: string, price: number) {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, IItemLocalStorage>(JSON.parse(mapStr)) : new Map<string, IItemLocalStorage>();

        const value = map.get(id) || {count: 0, title: title, price: price};
        if (value.count + count >= 0) {
            value.count += count
            map.set(id, value);
        }
        if (map.get(id)?.count === 0) {
            map.delete(id);
        }

        localStorage.setItem('myMap', JSON.stringify(Array.from(map.entries())));
        return;
    }


    getElementCount(id: string): number {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, IItemLocalStorage>(JSON.parse(mapStr)) : new Map<string, IItemLocalStorage>();

        return map.get(id)?.count || 0
    }

    sumMapValues(): IProductCountAndTotal {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, IItemLocalStorage>(JSON.parse(mapStr)) : new Map<string, IItemLocalStorage>();

        let sum = 0;
        let total = 0;
        const entries = map.entries();
        let nextEntry = entries.next();
        while (!nextEntry.done) {
            sum += nextEntry.value[1]?.count;
            total += nextEntry.value[1]?.price;
            nextEntry = entries.next();
        }

        let countAndTotalSum: IProductCountAndTotal = {count: sum, sum: total}
        return countAndTotalSum
    }

    getMapKeys(): string[] {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, IItemLocalStorage>(JSON.parse(mapStr)) : new Map<string, IItemLocalStorage>();
        return Array.from(map.keys());
    }

    getMap(): IItemLocalStorage[] {
        const mapStr = localStorage.getItem('myMap');
        const map = mapStr ? new Map<string, IItemLocalStorage>(JSON.parse(mapStr)) : new Map<string, IItemLocalStorage>();
        return Array.from(map.values());
    }

    removeMap() {
        localStorage.removeItem('myMap');
    }
}

const itemCountCart = new ItemCountCart();
export default itemCountCart;
