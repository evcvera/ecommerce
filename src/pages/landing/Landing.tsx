import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import contact from '../../assets/images/meli-contact.jpg'

const LandingPage: React.FC = () => {
    return (
        <div className="container">

            <div className="container-fluid my-2">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Bienvenido a Ecommerce</h1>
                        <p>Puedes buscar los siguientes productos: teclado, mouse, monitor, zapato, cocina, ropa, heladera</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <div className="w-auto d-flex justify-content-center">
                            <img className="w-100 "
                                 src="https://dmdqet87i5rod.cloudfront.net/estoesmedia/5e722a605abf2_meli180320.jpg"
                                 alt="brand"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container features-section">
                <div className="row">
                    <div className="col-md-4 my-1">
                        <i className="bi bi-speedometer2 fs-1"/>
                        <h3>Entrega rápida</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                    </div>
                    <div className="col-md-4 my-1">
                        <i className="bi bi-calendar2-check fs-1"/>
                        <h3>Atención al cliente</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                    </div>
                    <div className="col-md-4 my-1">
                        <i className="bi bi-people fs-1"/>
                        <h3>Expertos especializados</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Contacto</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                        <form>
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows={3}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 contact-image d-flex justify-content-center">
                        <img className="w-100" alt="contact" src={contact}/>
                    </div>
                </div>
            </div>

            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; 2023 - Ecommerce</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
