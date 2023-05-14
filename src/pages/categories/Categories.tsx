import React from 'react';
import {Link} from "react-router-dom";

const CategoriesPage: React.FC = () => {

    const categories = [
        {
            id: 1,
            name: 'Vehículos',
            image: 'bi bi-car-front fs-1'
        },
        {
            id: 2,
            name: 'Inmuebles',
            image: 'bi bi-house-heart-fill fs-1'
        },

        {
            id: 3,
            name: 'Celulares',
            image: 'bi bi-phone-fill fs-1'
        },

        {
            id: 4,
            name: 'Tablets',
            image: 'bi bi-tablet fs-1'
        },

        {
            id: 5,
            name: 'Calefaccion',
            image: 'bi bi-thermometer-sun fs-1'
        },

        {
            id: 6,
            name: 'Refrigeracion',
            image: 'bi bi-thermometer-snow fs-1'
        }
    ]

    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod dui vitae urna iaculis, vel malesuada magna venenatis. Nunc tempor diam eu gravida tempus.'

    return (
        <div className="container">
            <div className="container py-4">
                <h1 className="mb-4">Categorías</h1>
                <div className="row">
                    {categories.map((category) => (
                        <div key={category.id} className="col-sm-6 col-md-4 mb-4">
                            <div className="card h-100">
                                <i className={category.image}/>
                                <div className="card-body">
                                    <Link to={`/sales/${category.name}`}>
                                        <h5 className="card-title">{category.name}</h5>
                                    </Link>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;
