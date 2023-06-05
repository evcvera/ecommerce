import {IFormValue} from "./iFormValue";

export interface IPostTicket {
    id: string;
    items: IItemLocalStorage[];
    createdOn: Date;
    user: IFormValue;
}


export interface IItemLocalStorage {
    title?: string;
    count: number;
    price: number;
}


export interface IProductCountAndTotal {
    count: number;
    sum: number;
}
