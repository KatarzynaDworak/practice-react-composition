import React from 'react';

function Category(props) {
    return (
            <>
                <h2>Category</h2>
                <li>{props.id} {props.name} {props.price}</li>
                <button>Add to cart</button>
            </>
    )
}

export default Category;