import React from 'react';
import Product from './Product';

function Cart(props) {

    const { items } = props;

    return (
            <section>
                <h2>Cart</h2>
                <ul>
                    {items.map(item => <Product key={item.id} data={item} />)}
                </ul>

            </section>
    )
}

export default Cart;