import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <section>
                <form>
                    <label>
                        Name:
                        <input></input >    
                    </label>
                    <label>
                        Surname:
                        <input></input >    
                    </label>
                    
                </form>
                <input type="submit" />
            </section>
        )
    }
}

export default Form;