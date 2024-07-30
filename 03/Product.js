import React from "react";

const Product = (props) => {
    const { data, inCart, isCart, clickHandler } = props;
    
    function handleClick(id) {
        if (typeof clickHandler === 'function') {
            clickHandler(id);
        }
    } 

    return (
        <li>
            {data.name} ({data.price}) 
            {isCart 
                ? 
                    <button 
                        onClick={() => handleClick(data.id)}
                    >
                        REMOVE
                    </button>
                :
                    <button 
                        disabled={inCart} 
                        onClick={() => handleClick(data.id)}
                    >
                        BUY
                    </button>
            }   
        </li>
    );
}

export default Product;
