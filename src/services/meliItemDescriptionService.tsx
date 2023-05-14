import {IMeliItemDescription} from "../models/interfaces/iMeliItemDescription";

class MeliItemDescriptionService {
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

const searchItemDescription = new MeliItemDescriptionService();
export default searchItemDescription;
