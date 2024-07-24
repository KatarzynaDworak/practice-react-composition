import React from 'react';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return <table key={data.id}>{ data.id }</table>
    }
}

export default Table;
