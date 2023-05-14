import React, {useEffect, useState} from 'react';
import {ResultsEntity} from "../../models/interfaces/iMeliSearch";
import {Link} from "react-router-dom";
import itemCountCart from "../../modelServices/itemCountCart";
import {Body} from "../../models/interfaces/iMeliItem";
import buildImageService from "../../modelServices/buildImage";

interface Props {
    item: ResultsEntity | Body;
}

const Item: React.FC<Props> = ({item}) => {
    const [count, setCount] = useState(0)


    function SetCount(amount: number) {
        if (count + amount <= item.available_quantity) {
            itemCountCart.updateMap(item.id, amount)
            setCount(itemCountCart.getElementCount(item.id))
        }

    }

    useEffect(() => {
        setCount(itemCountCart.getElementCount(item?.id))
    }, [item]);


    return (
        <div className="row item-container border my-1 bg-white">
            <div className="col-md-3">
                {<img src={buildImageService.HD(item?.thumbnail)} alt={item.title} className="w-50 h-auto"/>}
            </div>
            <div className="col-md-8 item-details">
                <div className="item-header">
                    <div className="item-price">
                        <Link to={`/item/${item.id}`}>
                            <h4>{item.title}</h4>
                        </Link>
                        <p className="item-price-amount">
                            {new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(item.price)}
                        </p>
                        {/*    {item.shipping.free_shipping &&
                        <p className="item-free-shipping">Envío gratis</p>}*/}
                    </div>
                    <div className="item-seller">
                        {/*{(item?.installments !== undefined && item.installments > 0) &&
                        <p className="item-seller-name">Cuotas: {item?.installments?.quantity}</p>}*/}

                        {item?.sold_quantity !== undefined &&
                        <p className="item-location">{item.sold_quantity} vendidos</p>}

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
