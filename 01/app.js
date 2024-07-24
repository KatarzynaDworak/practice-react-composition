import React from 'react';
import { createRoot } from 'react-dom/client';

import Table from './Table';
import data from './data.json';

import List from './List';

function App()  {
    return (
    <>
        <List item={ ['Katarzyna', 'Jan'] } />
        <Table data={ data }/>
    </>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
