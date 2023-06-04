import {IMeliSearch, ResultsEntity} from "../models/interfaces/iMeliSearch";
import {IMeliItem} from "../models/interfaces/iMeliItem";
import {collection, addDoc, query, where, getDocs, setDoc, doc} from 'firebase/firestore';
import {IMeliItemDescription} from "../models/interfaces/iMeliItemDescription";


//Usado para migrar la busquedas de productos en meli a firebase.
class MeliSearchService {
    async searchItems(search: string): Promise<IMeliSearch> {
        return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}&offset=0`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data: IMeliSearch) => {
                // TODO almacena busquedas
                /*data.results?.forEach(item => {
                    this.searchItemDescription(item.id).then(description => {
                        item.description = description.plain_text;
                        item.category = search;
                        storeProducts(item);
                    })
                })*/
                return data
            })
    }

    async favouriteItems(itemIDs: string): Promise<IMeliItem[]> {
        return fetch(`https://api.mercadolibre.com/items?ids=${itemIDs}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data: IMeliItem[]) => {
                return data
            })
    }

    async searchItemDescription(id: string): Promise<IMeliItemDescription> {
        return fetch(`https://api.mercadolibre.com/items/${id}/description`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data: IMeliItemDescription) => {
                return data;
            });
    }
}

//Usado para migrar la busquedas de productos en meli a firebase.
const storeProducts = async (product: ResultsEntity): Promise<void> => {
    try {
        const db = (window as any).db;
        const collectionRef = collection(db, 'product');
        const q = query(collectionRef, where('id', '==', product.id));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            await addDoc(collectionRef, product);
            console.log(`Producto ${product.id} almacenado correctamente.`);
        } else {
            const docId = querySnapshot.docs[0].id;
            await setDoc(doc(collectionRef, docId), product);
            console.log(`Producto ${product.id} actualizado correctamente.`);
        }

    } catch (error) {
        console.log('Error almacenando los productos:', error);
    }
};

const meliSearchService = new MeliSearchService();
export default meliSearchService;
