import React from 'react';
import { createRoot } from 'react-dom/client';

import Table from './Table';
import data from './data.json';

import List from './List';

const toDoList = ['pakowanie rzeczy do przeprowadzki', 'zrobienie obiadu', 'nauka react', 'bieg']

function App()  {
    return (
        <>
            <List items={toDoList} />
            <Table data={ data }/>
        </>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
