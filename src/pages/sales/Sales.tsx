import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {IMeliSearch} from "../../models/interfaces/iMeliSearch";
import Loading from "../../components/loading/Loading";
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";
import productService from "../../services/productService";


const SalesPage: React.FC = () => {
    let [meliSearch, setMeliSearch] = useState<IMeliSearch | undefined>(undefined);
    const {productSearch} = useParams<{ productSearch: string }>();
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        setMeliSearch(undefined);
        if (productSearch && productSearch !== prevProductSearchRef.current) {
            prevProductSearchRef.current = productSearch;
            productService.searchItems(productSearch).then((ms) => {
                const item: IMeliSearch = {
                   results: ms
                };
                setMeliSearch(item);
            })
                .catch((error) => {
                    console.error(error)
                });
        }
    }, [productSearch]);

    return (
        <>
            {meliSearch?.results ?
                (<div className="container">
                    <h1>{meliSearch?.query}</h1>
                    <ItemListContainer items={meliSearch?.results}/>
                </div>) :
                <Loading/>
            }

        </>);
};

export default SalesPage;
