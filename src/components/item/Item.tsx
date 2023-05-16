import React, {useEffect, useState} from 'react';
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";
import {Link} from "react-router-dom";
import itemCountCart from "../../modelServices/itemCountCart";
import {Body} from "../../models/interfaces/iMeliItem";
import buildImageService from "../../modelServices/buildImage";

interface Props {
    item: ResultsEntity | Body;
    refreshItemCount: () => void;
}

const Item: React.FC<Props> = ({item, refreshItemCount}) => {
    const [count, setCount] = useState(0);


    function SetCount(amount: number) {
        if (count + amount <= item.available_quantity) {
            itemCountCart.updateMap(item.id, amount);
            setCount(itemCountCart.getElementCount(item.id))
        }
        refreshItemCount()
    }

    useEffect(() => {
        setCount(itemCountCart.getElementCount(item?.id))
    }, [item]);


    return (
        <div className="row item-container border my-1 bg-white">
            <div className="col-md-3">
                {<img src={buildImageService.HD(item?.thumbnail)} alt={item.title} className="w-50 h-auto"/>}
            </div>
            <div className="col-md-8">
                <div>
                    <div>
                        <Link to={`/item/${item.id}`}>
                            <h4>{item.title}</h4>
                        </Link>
                        <p>
                            {new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(item.price)}
                        </p>

                        {item.original_price &&
                        <p className={"text-center text-decoration-line-through"}>Antes:
                            ${item.original_price.toLocaleString()} </p>}

                        {item.shipping?.free_shipping &&
                        <p>Envío gratis</p>}
                    </div>
                    <div>
                        {(item?.installments !== undefined && item.installments > 0) &&
                        <p>Cuotas: {item?.installments?.quantity}</p>}

                        {item?.sold_quantity !== undefined &&
                        <p>{item.sold_quantity} vendidos</p>}

                    </div>
                </div>
                <div>
                    {item?.available_quantity !== undefined &&
                    <p>{item.available_quantity} disponibles</p>}
                </div>
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-center">
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
    )
};

export default Item;
