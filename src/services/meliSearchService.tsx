import {IMeliSearch} from "../models/interfaces/iMeliSearch";
import {IMeliItem} from "../models/interfaces/iMeliItem";

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
}

const meliSearchService = new MeliSearchService();
export default meliSearchService;
