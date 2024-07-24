import React from 'react';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        const table = data.map(n => <TableHeader key={n} id={n.id} name={n.name} price={n.price} quantity={n.quantity} />)

        return <table>{ table }</table>
    }
}

const TableHeader = props => {
    return  (
            <table>
                <th>{props.id}</th>
                <th>{props.name}</th>
                <th>{props.price}</th>
                <th>{props.quantity}</th>
            </table>
    )
}

export default Table;
