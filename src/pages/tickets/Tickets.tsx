import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import Ticket from "../../components/ticket/ticket";
import ticketService from "../../services/ticketService";
import {IPostTicket} from "../../models/interfaces/iItemLocalStorage";

const TicketsPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const prevProductSearchRef = useRef<string>();
    const [postTicket, setPostTicket] = useState<IPostTicket | undefined>();

    useEffect(() => {
        if (id && id !== prevProductSearchRef.current) {
            ticketService.searchItemById(id).then((pt) => {
                if (pt) {
                    setPostTicket(pt);
                    return
                }
            }).catch((error) => {
                console.error(error)
            });
        }
    }, [id]);

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
                        <p>ID: {id}</p>
                        <p>Fecha: {parseTimestampToString(postTicket?.createdOn)}</p>
                    </div>

                    <div className="ticket-body">
                        <h4>Información del Usuario</h4>
                        <p>Nombre: {postTicket.user.fullName}</p>
                        <p>Dirección: {postTicket.user.address}</p>
                        <p>Teléfono: {postTicket.user.phone}</p>
                        <p>Email: {postTicket.user.email}</p>
                        <p>Email de Confirmación: {postTicket.user.confirmEmail}</p>
                    </div>

                    <div className="ticket-footer">
                        <h4>Detalles de los Productos</h4>
                        <Ticket items={postTicket?.items}/>
                    </div>
                </div>

            </>
            }
        </div>
    )
};

export default TicketsPage;
