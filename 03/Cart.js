import React from 'react';
import Product from './Product';

function Cart(props) {

    const { cart } = props;

    return (
            <section>
                <h2>Cart</h2>
                <ul>
                    {/* {props.children} */}
                    {cart.map(item => <Product key={item.id} data={item} />)}
                </ul>

            </section>
    )
}

export default Cart;