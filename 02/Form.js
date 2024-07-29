import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        };
    }

    // Obsługa zmian w polach formularza
    onHandleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Obsługa przesyłania formularza
    onHandleSubmit = (event) => {
        event.preventDefault();
        const { name, surname } = this.state;
        if (name && surname) {
            this.props.addUser({ name, surname });
            this.setState({ name: '', surname: '' });
        }
    }

    render() {
        const { name, surname } = this.state;
        
        const formStyle = {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            maxWidth: '300px',
            margin: '0 auto'
        };
        const inputStyle = {
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc'
        };
        const buttonStyle = {
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer'
        };

        return (
            <section>
                <form onSubmit={this.onHandleSubmit} style={formStyle}>
                    <label>
                        Name:
                        <input 
                            type="text"
                            name="name" 
                            value={name} 
                            onChange={this.onHandleInputChange}
                            style={inputStyle}
                        />   
                    </label>
                    <label>
                        Surname:
                        <input 
                            type="text"
                            name="surname" 
                            value={surname} 
                            onChange={this.onHandleInputChange}
                            style={inputStyle}
                        />
                    </label>
                    <input type="submit" style={buttonStyle} value="Submit" />
                </form>
            </section>
        );
    }
}

export default Form;

