import React from 'react';
import Product from './Product';

function Category(props) {
    const { items, inCart, clickHandler } = props;

    return (
        <section>
            <h2>Category</h2>
            <ul>
                {items.map(item => (
                    <Product 
                        key={item.id} 
                        data={item} 
                        clickHandler={clickHandler}
                        inCart={inCart(item.id)} 
                    />
                ))}
            </ul>
        </section>
    );
}

export default Category;
