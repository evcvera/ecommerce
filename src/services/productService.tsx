import {collection, getDocs, query, limit, where} from "firebase/firestore";
import { ResultsEntity} from "../models/interfaces/iMeliSearch";

class ProductService {

    async searchItems(category: string): Promise<ResultsEntity[]> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const db = (window as any).db;
                const collectionRef = collection(db, 'product');
                const q = query(collectionRef, where('category', '==', category), limit(20));
                const querySnapshot = await getDocs(q);

                const items  = querySnapshot.docs.map((doc) => doc.data())

                resolve(items);
            } catch (error) {
                reject(error);
            }
        });
    }

    async  searchItemsById(ids: string[]): Promise<ResultsEntity[]> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const db = (window as any).db;
                const collectionRef = collection(db, 'product');
                const q = query(collectionRef, where('id', 'in', ids), limit(50));
                const querySnapshot = await getDocs(q);
                const items = querySnapshot.docs.map((doc) => doc.data());
                resolve(items);
            } catch (error) {
                reject(error);
            }
        });
    }
}

const productService = new ProductService();
export default productService;



