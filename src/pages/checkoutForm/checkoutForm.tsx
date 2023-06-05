import React, {useContext, useState} from 'react';
import {IFormValue} from "../../models/interfaces/iFormValue";
import userInfoService from "../../modelServices/userInfo";
import itemCountCart from "../../modelServices/itemCountCart";
import Ticket from "../../components/ticket/ticket";
import {CartContext} from "../../App";
import ticketService from "../../services/ticketService";
import {IPostTicket} from "../../models/interfaces/iItemLocalStorage";
import {useNavigate} from "react-router-dom";

const PaymentFormPage: React.FC = () => {
    const formStorage = userInfoService.getFormValue();
    const [isPayed, setIsPayed] = useState<boolean>(false)
    const itemsTicket = itemCountCart.getMap();
    const {countAndTotal, setContextCount} = useContext(CartContext);
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState<IFormValue>(formStorage ? formStorage :
        {
            fullName: '',
            address: '',
            phone: '',
            email: '',
            confirmEmail: '',
        });
    const [errors, setErrors] = useState<IFormValue>({
        fullName: '',
        address: '',
        phone: '',
        email: '',
        confirmEmail: '',
    });


    const validateForm = () => {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numericRegex = /[^0-9]/;

        const newErrors: IFormValue = {
            fullName: '',
            address: '',
            phone: '',
            email: '',
            confirmEmail: '',
        };

        if (formValues.fullName.trim() === '') {
            isValid = false;
            newErrors.fullName = 'Ingrese nombre completo.';
        }

        if (formValues.address.trim() === '') {
            isValid = false;
            newErrors.address = 'Ingrese direccion';
        }

        if (formValues.phone.trim() === '') {
            isValid = false;
            newErrors.phone = 'Ingrese celular';
        } else if (numericRegex.test(formValues.phone)) {
            isValid = false;
            newErrors.phone = 'Solo numeros';
        }

        if (formValues.email.trim() === '') {
            isValid = false;
            newErrors.email = 'Ingrese email';
        } else if (!emailRegex.test(formValues.email)) {
            isValid = false;
            newErrors.email = 'Ingrese dirección';
        }

        if (formValues.confirmEmail.trim() === '') {
            isValid = false;
            newErrors.confirmEmail = 'Ingrese email';
        } else if (formValues.email !== formValues.confirmEmail) {
            isValid = false;
            newErrors.confirmEmail = 'Los emails deben ser iguales';
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm() && itemsTicket) {
            userInfoService.updateMap(formValues);
            let id = crypto.randomUUID();
            let ticket: IPostTicket = {
                id: id,
                items: itemsTicket,
                createdOn: new Date(),
                user: formValues,
            };
            ticketService.storeTicket(ticket).then(x => {
                setIsPayed(true);
                itemCountCart.removeMap();
                setContextCount();
                navigate(`ticket/${id}`);
            })
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormValues((prevValues) => ({...prevValues, [name]: value}));
    };


    return (
        <div className="container">
            {!isPayed ?
                <>
                    <Ticket items={itemsTicket}/>
                    <h1>"Complete para realizar pago"</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleChange}
                            />
                            {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address"
                                value={formValues.address}
                                onChange={handleChange}
                            />
                            {errors.address && <small className="text-danger">{errors.address}</small>}
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <small className="text-danger">{errors.phone}</small>}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        <div className="form-group">
                            <label>Confirm Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="confirmEmail"
                                value={formValues.confirmEmail}
                                onChange={handleChange}
                            />
                            {errors.confirmEmail && <small className="text-danger">{errors.confirmEmail}</small>}
                        </div>

                        <button type="submit" className="btn btn-primary">Realizar pago</button>
                    </form>
                </> :
                <h1> "Pago realizado con exito"</h1>}
        </div>
    );
}
export default PaymentFormPage;
