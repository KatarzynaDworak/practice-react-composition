import React from "react";

const Product = (props) => {
    const { data, clickHandler } = props;
    
    function handleClick(id) {
        console.log(id);

        if(typeof clickHandler === 'function') {
            clickHandler(id);
        }
    } 

    return (
            <section>
                <li key={data.id}>{data.name} ({data.price})<button onClick={() => handleClick(data.id)}>BUY</button> </li>
            </section>
    )
}

export default Product;