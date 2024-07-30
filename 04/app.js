import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [{name: 'plik.html', size: 999, content: '', id: 10}],
    }

    addFile = (file) => {
        this.setState((prevState) => ({
            filesList: [...prevState.filesList, file]}))
    }

    render() {
        return (
            <section>
                <File addFile={this.addFile}/>
                <List items={this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
