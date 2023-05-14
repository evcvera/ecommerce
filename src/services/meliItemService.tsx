import {IMeliSingleItem} from "../models/interfaces/iMeliSingleItem";

class MeliItemService {
    async searchItem(id: string): Promise<IMeliSingleItem> {
        return fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data: IMeliSingleItem) => {
                return data;
            });
    }
}

const meliItemService = new MeliItemService();
export default meliItemService;
