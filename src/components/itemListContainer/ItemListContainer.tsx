import React from 'react';

interface Props {
    greeting: string;
}

const ItemListContainer: React.FC<Props> = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
};

export default ItemListContainer;
