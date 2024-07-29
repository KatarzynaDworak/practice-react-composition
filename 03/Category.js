import React from 'react';

function Category(props) {

    const { items } = props;
    const list = items.map((n, index) => n);

    return (
            <>
                <h2>Category</h2>
                <ul key={index}>{<Item item={n}/>}</ul>

            </>
    )
}

const Item = (props) => {
    const {item} = props;

    return (
        <>
            <li>{item}</li>
            <button>Add to cart</button>
        </>
    )
}

export default Category;