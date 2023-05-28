import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {IMeliSingleItem} from "../../models/interfaces/iMeliSingleItem";
import {IMeliItemDescription} from "../../models/interfaces/iMeliItemDescription";
import itemCountCart from "../../modelServices/itemCountCart";

interface Props {
    item: IMeliSingleItem | undefined;
    itemDescription: IMeliItemDescription | undefined;

}

const ItemDetail: React.FC<Props> = ({item, itemDescription}) => {
    const [count, setCount] = useState(0);


    function SetCount(amount: number) {
        if (item?.available_quantity && count + amount <= item?.available_quantity) {
            itemCountCart.updateMap(item.id, amount);
            setCount(itemCountCart.getElementCount(item.id))
        }
    }

    useEffect(() => {
        if (item) {
            setCount(itemCountCart.getElementCount(item?.id))
        }
    }, [item]);

    return (
        <div className="container py-5">
            {(item && itemDescription) &&
            <>
                <div className="row">
                    <div className="col-md-7">
                        {item.pictures && <img src={item.pictures[0].url} alt={item.title} className="img-fluid"/>}
                    </div>
                    <div className="col-md-5">
                        <h2 className="fw-bold">{item.title}</h2>
                        <h4 className="text-muted">{item.condition} - {item.sold_quantity} vendidos</h4>
                        <h4 className="card-text">{item.available_quantity} disponibles</h4>
                        {item.original_price && <h3 className="mt-3 text-center text-decoration-line-through">Antes:
                            ${item.original_price.toLocaleString()}</h3>}
                        {item.price && <h3 className="mt-3">Ahora: ${item.price.toLocaleString()}</h3>}
                        <Link to={item.permalink} target="_blank">
                            <button className="btn btn-primary mt-4">Comprar ahora</button>
                        </Link>

                        <div className="mt-2">
                            <div className="d-flex flex-column align-items-center">
                                <div className="btn-group" role="group">
                                    <button onClick={() => SetCount(-1)} className="btn btn-secondary">-
                                    </button>
                                    <span className="mx-2">{count}</span>
                                    <button onClick={() => SetCount(1)} className="btn btn-secondary">+
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="py-5">
                    <h3 className="fw-bold">Descripción del producto</h3>
                    <p className="text-muted">{itemDescription.plain_text}</p>
                </div>
            </>
            }
        </div>
    );
};

export default ItemDetail;
