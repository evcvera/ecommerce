import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from "../../components/itemDetail/itemDetail";
import Loading from "../../components/loading/Loading";
import productService from "../../services/productService";
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";
import NotFoundPage from "../notFound/notFound";

const ItemPage: React.FC = () => {
    let [meliSearch, setMeliSearch] = useState<ResultsEntity[] | undefined>(undefined);
    const {id} = useParams<{ id: string }>();
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        if (id && id !== prevProductSearchRef.current) {
            productService.searchItemsById([id]).then((ms) => {
                if (ms.length > 0) {
                    ms[0].thumbnail = ms[0].thumbnail.replace("-I", "-O")
                    setMeliSearch(ms)
                    return
                }
                setMeliSearch([]);
            })
                .catch((error) => {
                    console.error(error)
                });

        }
    }, [id]);

    return (
        <>
            {
                (meliSearch && meliSearch?.length !== 0) && <ItemDetail item={meliSearch[0]}/>
            }
            {
                (meliSearch && meliSearch?.length === 0) && <NotFoundPage/>
            }
            {
                !meliSearch && <Loading/>
            }
        </>
    )
};

export default ItemPage;
