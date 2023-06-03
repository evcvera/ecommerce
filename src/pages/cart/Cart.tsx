import React, {useContext, useEffect, useRef, useState} from 'react';
import itemCountCart from "../../modelServices/itemCountCart";
import meliSearchService from "../../services/meliSearchService";
import Item from "../../components/item/Item";
import {IMeliItem} from "../../models/interfaces/iMeliItem";
import Loading from "../../components/loading/Loading";
import {CartContext} from "../../App";
import productService from "../../services/productService";
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";


const CartPage: React.FC = () => {
    let [meliSearch, setMeliSearch] = useState<ResultsEntity[] | undefined>(undefined);
    const prevProductSearchRef = useRef<string[]>();
    let myArray = itemCountCart.getMapKeys();
    const {count} = useContext(CartContext);

    useEffect(() => {
        setMeliSearch(undefined);
        prevProductSearchRef.current = myArray;
        if (myArray.length > 0) {
            productService.searchItemsById(myArray).then((ms) => {
                setMeliSearch(ms);

                console.log(ms)
            })
                .catch((error) => {
                    console.error(error)
                });
        }
    }, []);


    return (
        (
            <>  {
                myArray.length > 0 ?
                    <div className={"py-4 container"}>
                        <h1>Mi Carrito {count}</h1>
                        {(meliSearch && meliSearch.length > 0) ?
                            meliSearch?.map((item, i) => (
                                <div key={i}>{
                                    <Item item={item}/>
                                }
                                </div>
                            )) :
                            <Loading/>
                        }
                    </div> :
                    <div>
                        <h1>Opps, no tenes items en tu carrito.</h1>
                    </div>
            }
            </>

        ));
};


export default CartPage;
