import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {IMeliItemDescription} from "../../models/interfaces/iMeliItemDescription";
import ItemDetail from "../../components/itemDetail/itemDetail";
import Loading from "../../components/loading/Loading";
import productService from "../../services/productService";
import {IMeliSearch, ResultsEntity} from "../../models/interfaces/iMeliSearch";

const ItemPage: React.FC = () => {
    /*    const [meliItem, setMeliItem] = useState<IMeliSingleItem | undefined>(undefined);
        const [meliItemDescription, setmeliItemDescription] = useState<IMeliItemDescription | undefined>(undefined);*/
    let [meliSearch, setMeliSearch] = useState<ResultsEntity | undefined>(undefined);
    const {id} = useParams<{ id: string }>();
    const prevProductSearchRef = useRef<string>();

    useEffect(() => {
        if (id && id !== prevProductSearchRef.current) {

            /*            prevProductSearchRef.current = id;
                        meliItemService.searchItem(id)
                            .then((ms) => {
                                setMeliItem(ms);
                            })
                            .catch((error) => console.error(error));*/

            /*            meliItemDescriptionService.searchItemDescription(id)
                            .then((desc) => {
                                setmeliItemDescription(desc);
                            })
                            .catch((error) => console.error(error));*/

            productService.searchItemsById([id]).then((ms) => {
                ms[0].thumbnail = ms[0].thumbnail.replace("-I", "-O")
                setMeliSearch(ms[0]);

                console.log(ms)
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
