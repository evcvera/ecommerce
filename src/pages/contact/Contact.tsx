import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur distinctio est ipsa molestiae
                officia ullam? Dicta ducimus facere illo quas, qui soluta tempora. Beatae enim facere quae ratione ullam.</span>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
