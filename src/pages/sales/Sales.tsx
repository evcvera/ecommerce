import React from 'react';
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";

const SalesPage: React.FC = () => {
    return (
        <div className="container">
           <ItemListContainer greeting={'bienvenido'}/>
        </div>
    );
};

export default SalesPage;
