import React from "react";

const CoinComponent = ({name, symbol, image, price, marketCap, change24h}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{marketCap.toLocaleString()}</span>
            <span>{change24h}</span>
        </div>
    )
};

export default CoinComponent;
