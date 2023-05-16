import React from 'react';
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";
import Item from "../item/Item";

interface Props {
    items: ResultsEntity[];
    refreshItemCount: () => void;
}

const ItemListContainer: React.FC<Props> = ({items, refreshItemCount}) => {
    return (
        <div>
            {items.map((item) => (
                <Item item={item} key={item.id} refreshItemCount={refreshItemCount}/>
            ))}
        </div>
    )
};

export default ItemListContainer;
