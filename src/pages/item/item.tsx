import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import meliItemService from "../../services/meliItemService";
import meliItemDescriptionService from "../../services/meliItemDescriptionService";
import {IMeliSingleItem} from "../../models/interfaces/iMeliSingleItem";
import {IMeliItemDescription} from "../../models/interfaces/iMeliItemDescription";
import ItemDetail from "../../components/itemDetail/itemDetail";
import Loading from "../../components/loading/Loading";

const ItemPage: React.FC = () => {
    const [meliItem, setMeliItem] = useState<IMeliSingleItem | undefined>(undefined);
    const [meliItemDescription, setmeliItemDescription] = useState<IMeliItemDescription | undefined>(undefined);
    const {id} = useParams<{ id: string }>();
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        if (id && id !== prevProductSearchRef.current) {
            prevProductSearchRef.current = id;
            meliItemService.searchItem(id)
                .then((ms) => {
                    setMeliItem(ms);
                })
                .catch((error) => console.error(error));

            meliItemDescriptionService.searchItemDescription(id)
                .then((desc) => {
                    setmeliItemDescription(desc);
                })
                .catch((error) => console.error(error));
        }
    }, [id]);

    return (
        <>
            {
                (meliItem && meliItemDescription) ?
                    <ItemDetail item={meliItem} itemDescription={meliItemDescription}/> :
                    <Loading/>
            }
        </>
    )
};

export default ItemPage;
