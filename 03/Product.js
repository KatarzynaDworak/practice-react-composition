import React from "react";

const Product = () => {
    const { data } = props;
    
    return (
            <section>
                <li key={data.id}>{data.name} {(data.price)}</li>
                <button>usuń</button> 
            </section>
    )
}

export default Product;