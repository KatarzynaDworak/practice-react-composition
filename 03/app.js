import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    
    addProduct = (id) => {
        const product = data.find(item => item.id === id);

        if (product) {
            this.setState((prevState) => ({
                cart: [...prevState.cart, product]
            }));
        }
    }

    removeProduct = (id) => {
        const cart = this.state.cart.filter(item => item.id !== id);

        if (cart) {
            this.setState(() => ({
                cart
            }));
        }
    }

    inCart = (id) => {
        const { cart } = this.state;
        return !!cart.find(item => item.id === id);
    }

    render() {
        const { cart } = this.state;

        return (
            <section>
                <Category inCart={this.inCart} items={data} clickHandler={this.addProduct}/>
                <Cart>
                    {cart.map(item => <Product isCart={true} key={item.id} data={item} clickHandler={this.removeProduct} />)}
                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
