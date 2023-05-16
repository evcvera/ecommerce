import React, {useEffect, useRef, useState} from 'react';
import itemCountCart from "../../modelServices/itemCountCart";
import meliSearchService from "../../services/meliSearchService";
import Item from "../../components/item/Item";
import {IMeliItem} from "../../models/interfaces/iMeliItem";
import Loading from "../../components/loading/Loading";

interface Props {
    refreshItemCount: () => void;
}

const CartPage: React.FC<Props> = ({refreshItemCount}) => {
    let [meliSearch, setMeliSearch] = useState<IMeliItem[] | undefined>(undefined);
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        setMeliSearch(undefined);
        let myArray = itemCountCart.getMapKeys().join(",");
        prevProductSearchRef.current = myArray;
        if (myArray.length > 0) {
            meliSearchService.favouriteItems(myArray)
                .then((ms) => {
                    if (ms) {
                        // @ts-ignore
                        ms.sort((a, b) => a.body?.price - b.body?.price);
                        setMeliSearch(ms)
                    }
                })
                .catch((error) => {
                    console.error(error)
                });
        }
    }, []);


    return (
        (
            <div className={"py-4 container"}>
                <h1>Mi Carrito</h1>
                {meliSearch && meliSearch.length > 0 ?
                    meliSearch?.map((item, i) => (
                        <div key={i}>{
                            ((item?.body && item?.body?.id) &&
                                <Item item={item?.body} refreshItemCount={refreshItemCount}/>)
                        }
                        </div>
                    )) :
                    <Loading/>
                }
            </div>
        ));
};


export default CartPage;
