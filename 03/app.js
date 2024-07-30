import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    
    addProduct = (id) => {
        const product = data.find(item => item.id === id)

        if (product) {
            this.setState((prevState) => (
                {
                   cart: [...prevState.cart, product]
                }
            ))

        }
    }

    render() {
        const { cart } = this.state;

        return (
            <section>
                <Category items={data} clickHandler={this.addProduct}/>
                <Cart cart={cart}/>
            </section>
        )
    }

}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
