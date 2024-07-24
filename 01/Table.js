import React from 'react';

class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);
    
        return  (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>

                    })}
                </tbody>
            </table>
        )
    }
}

export default Table;
