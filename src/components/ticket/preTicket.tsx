import React from 'react';
import {IItemLocalStorage} from "../../models/interfaces/iItemLocalStorage";

interface TicketProps {
    items: IItemLocalStorage[];
}

const PreTicket: React.FC<TicketProps> = ({items}) => {
    const calculateTotal = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.count * item.price;
        });
        return total;
    };

    return (
        <div className="ticket">
                <h2>Ticket</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item?.title}</td>
                        <td>{item.count}</td>
                        <td>${item.price}</td>
                        <td>${item.count * item.price}</td>
                    </tr>
                ))}
                </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td/>
                    <td/>
                    <td>${calculateTotal()}</td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default PreTicket;
