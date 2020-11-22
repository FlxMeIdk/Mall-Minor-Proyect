import React from 'react';
import './Product.css';

const Product = ({ image, username, productName }) => {
    return (
        <div>
           <img src={image} />
           <h2>{productName}</h2>
           <h4>{username}</h4>
        </div>
    )
}

export default Product
