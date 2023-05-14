import React from 'react';
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";
import Item from "../item/Item";

interface Props {
    items: ResultsEntity[];
}

const ItemListContainer: React.FC<Props> = ({items}) => {
    return (
        <div>
            {items.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    )
};

export default ItemListContainer;
