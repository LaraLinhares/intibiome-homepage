import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ imageUrl, description, title, backgroundColor, isDiscovery }) => {

    return (
        <div className="product-card" >
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
        <h2 style={{ backgroundColor: backgroundColor }}>{title}</h2>
        </div>
    );
};

export default ProductCard;