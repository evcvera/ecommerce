import React, {useEffect, useRef, useState} from 'react';
import itemCountCart from "../../modelServices/itemCountCart";
import meliSearchService from "../../services/meliSearchService";
import Item from "../../components/item/Item";
import {IMeliItem} from "../../models/interfaces/iMeliItem";

const CartPage: React.FC = () => {
    let [meliSearch, setMeliSearch] = useState<IMeliItem[] | undefined>(undefined);
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        setMeliSearch(undefined);
        let myArray = itemCountCart.getMapKeys().join(",")
        prevProductSearchRef.current = myArray;
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
    }, []);

    return (
        (

            <div>
                <h1>Hola</h1>
                {meliSearch && meliSearch.length > 0 && meliSearch?.map((item, i) => (
                    <>{
                        ((item?.body && item?.body?.id) &&
                            <Item item={item?.body} key={i}/>)
                    }
                    </>
                ))}
            </div>
        ));
};


export default CartPage;
