import React from 'react';
import ItemListContainer from "../../components/itemListContainer/ItemListContainer";

const FavoritesPage: React.FC = () => {
    return (
        <div className="container">
            <ItemListContainer greeting={"BIENVENIDO"}/>
        </div>
    );
};

export default FavoritesPage;
