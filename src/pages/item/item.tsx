import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from "../../components/itemDetail/itemDetail";
import Loading from "../../components/loading/Loading";
import productService from "../../services/productService";
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";

const ItemPage: React.FC = () => {
    let [meliSearch, setMeliSearch] = useState<ResultsEntity | undefined>(undefined);
    const {id} = useParams<{ id: string }>();
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        if (id && id !== prevProductSearchRef.current) {
            productService.searchItemsById([id]).then((ms) => {
                ms[0].thumbnail = ms[0].thumbnail.replace("-I", "-O")
                setMeliSearch(ms[0]);
            })
                .catch((error) => {
                    console.error(error)
                });

        }
    }, [id]);

    return (
        <>
            {
                (meliSearch) ?
                    <ItemDetail item={meliSearch}/> :
                    <Loading/>
            }
        </>
    )
};

export default ItemPage;
