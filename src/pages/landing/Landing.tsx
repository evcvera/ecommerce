import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage: React.FC = () => {
    return (
        <div className="container">

            <div className="container-fluid hero-section">
                <div className="row align-items-center">
                    <div className="col-md-6 hero-content">
                        <h1>Welcome to Our Site</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="col-md-6 hero-image">
                        <div className="w-auto d-flex justify-content-center">
                            <img className="w-100 "
                                 src="https://dmdqet87i5rod.cloudfront.net/estoesmedia/5e722a605abf2_meli180320.jpg"
                                 alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container features-section">
                <div className="row">
                    <div className="col-md-4 feature">
                        <i className="bi bi-speedometer2"></i>
                        <h3>Fast Loading Speed</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                    </div>
                    <div className="col-md-4 feature">
                        <i className="bi bi-calendar2-check"></i>
                        <h3>24/7 Support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                    </div>
                    <div className="col-md-4 feature">
                        <i className="bi bi-people"></i>
                        <h3>Expert Team</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid contact-section">
                <div className="row align-items-center">
                    <div className="col-md-6 contact-content">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis,
                            vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows={3}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 contact-image d-flex justify-content-center">
                        <img className="w-100" src="https://pbs.twimg.com/media/E5yudTlWUAYgAmQ.jpg"
                             alt="Contact Image"/>
                    </div>
                </div>
            </div>
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; 2023 - Company Name</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
