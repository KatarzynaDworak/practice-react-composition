import React from 'react';
import Product from './Product';

function Category(props) {

    const { items, isCart, clickHandler } = props;

    return (
            <section>
                <h2>Category</h2>
                <ul>
                    {items.map(item => <Product 
                    key={item.id} 
                    data={item} 
                    clickHandler={clickHandler}
                    isCart={isCart(item.id)} 
                    />)}
                </ul>

            </section>
    )
}

export default Category;