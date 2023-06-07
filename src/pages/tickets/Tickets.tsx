import React, {useEffect, useRef, useState} from 'react';
import ticketService from "../../services/ticketService";
import {IPostTicket} from "../../models/interfaces/iItemLocalStorage";
import ticketsLocalStorageService from "../../modelServices/ticketsLocalStorage";
import PostTicket from "../../components/postTicket/postTicket";
import Loading from "../../components/loading/Loading";

const TicketsPage: React.FC = () => {
    const [Tickets, setPostTickets] = useState<IPostTicket[] | undefined>();
    const [ticketsID, setTicketsID] = useState<string[] | undefined>();

    useEffect(() => {
        let ticketIDS = ticketsLocalStorageService.getTickets();
        setTicketsID(ticketIDS)
        if (ticketIDS.length > 0) {
            ticketService.searchItemsByIds(ticketIDS).then((pt) => {
                if (pt) {
                    setPostTickets(pt);
                    return
                }
            }).catch((error) => {
                console.error(error)
            });
        }
    }, []);

    return (
        <div className="container">
            {(ticketsID && ticketsID.length > 0 && Tickets) &&
            <>
                {Tickets.map((item) => (
                    <PostTicket postTicket={item} key={item.id}/>
                ))}
            </>
            }
            {(ticketsID && ticketsID.length === 0 && !Tickets) &&
            <h1>No tienes tickets</h1>
            }
            {(ticketsID && ticketsID.length > 0 && !Tickets) &&
            <Loading/>
            }
        </div>
    )
};

export default TicketsPage;
