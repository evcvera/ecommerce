import {addDoc, collection, getDocs, query, where} from 'firebase/firestore';
import {IPostTicket} from "../models/interfaces/iItemLocalStorage";

class TicketService {
    async storeTicket(ticket: IPostTicket): Promise<IPostTicket> {
        return new Promise<any>(async (resolve, reject) => {
            try {
                const db = (window as any).db;
                const collectionRef = collection(db, 'ticket');
                await addDoc(collectionRef, ticket).then(x => {
                    resolve(ticket);
                });
            } catch (error) {
                console.log(error);
            }
        });
    }

    async searchItemById(id: string): Promise<IPostTicket | undefined> {
        try {
            const db = (window as any).db;
            const collectionRef = collection(db, 'ticket');
            const q = query(collectionRef, where('id', '==', id));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                return undefined;
            }

            const firstDocument = querySnapshot.docs[0];
            return firstDocument.data() as IPostTicket;
        } catch (error) {
            console.error('Error searching for item:', error);
            return undefined;
        }
    }
}

const ticketService = new TicketService();
export default ticketService;
