import React from "react";

const Product = (props) => {
    const { data, isCart, clickHandler } = props;
    
    function handleClick(id) {
        console.log(id);

        if(typeof clickHandler === 'function') {
            clickHandler(id);
        }
    } 

    return (
            <section>
                <li>
                    {data.name} ({data.price})
                    <button 
                        disabled={isCart} 
                        onClick={() => handleClick(data.id)}
                    >
                        BUY
                    </button> 
                </li>
            </section>
    )
}

export default Product;