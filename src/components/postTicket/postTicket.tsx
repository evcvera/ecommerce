import React from 'react';
import PreTicket from "../ticket/preTicket";
import {IPostTicket} from "../../models/interfaces/iItemLocalStorage";

interface TicketProps {
    postTicket: IPostTicket;
}

const PostTicket: React.FC<TicketProps> = ({postTicket}) => {
    const parseTimestampToString = (timestamp: any): string => {
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleString();
    };


    return (
        <div className="container">
            {postTicket &&
            <>
                <div className="ticket">
                    <div className="ticket-header">
                        <h3>Ticket de Compra</h3>
                        <p><b>ID: {postTicket?.id}</b></p>
                        <p>Fecha: {parseTimestampToString(postTicket?.createdOn)}</p>
                    </div>

                    <div className="ticket-body">
                        <h4>Información del Usuario</h4>
                        <p>Nombre: {postTicket.user.fullName}</p>
                        <p>Dirección: {postTicket.user.address}</p>
                        <p>Teléfono: {postTicket.user.phone}</p>
                        <p>Email: {postTicket.user.email}</p>
                    </div>

                    <div className="ticket-footer">
                        <h4>Detalles de los Productos</h4>
                        <PreTicket items={postTicket?.items}/>
                    </div>
                </div>
                <hr/>
            </>
            }
        </div>
    )
};

export default PostTicket;
