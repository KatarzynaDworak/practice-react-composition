import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class File extends React.Component {
    
    handleChange = (e) => {
        console.log(this.input.files);

        [...this.input.files].forEach(file => {
            if (file.type.includes('text')) {

                const reader = new FileReader();
                
                reader.addEventListener("load", () => {
                    const data = {
                        name: file.name,
                        id: uuidv4(),
                        content: reader.result,
                        size: file.size,
                    };
                    this.props.addFile(data);
                    console.log(data);
                }, false);
                reader.readAsText(file); // Dodanie metody do odczytu pliku
            }
        });
    }
    
    render() {
        return <input onChange={this.handleChange} ref={element => this.input = element} type="file" multiple />
    }
}

export default File;
