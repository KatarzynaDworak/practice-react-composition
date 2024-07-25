import React from 'react';

class Table extends React.Component {
    render() {
        const { data } = this.props;
        console.log(data);
    
        const tableStyle = {
            width: '100%',
            borderCollapse: 'collapse',
        };
        const headerStyle = {
            backgroundColor: '#f2f2f2',
            borderBottom: '2px solid #ddd',
            padding: '10px',
        };
        const cellStyle = {
            border: '1px solid #ddd',
            padding: '10px',
        };
        const rowStyle = {
            backgroundColor: '#fff',
        };
        const rowHoverStyle = {
            backgroundColor: '#f9f9f9',
        };

        return (
            <table style={tableStyle}>
                <TableHeader style={headerStyle} />
                <TableBody data={data} cellStyle={cellStyle} rowStyle={rowStyle} rowHoverStyle={rowHoverStyle} />
            </table>
        );
    }
}

const TableHeader = ({ style }) => {
    return (
        <thead>
            <tr>
                <th style={style}>ID</th>
                <th style={style}>NAME</th>
                <th style={style}>PRICE</th>
                <th style={style}>QUANTITY</th>
            </tr>
        </thead>
    );
}

const TableBody = ({ data, cellStyle, rowStyle, rowHoverStyle }) => {
    const [hoverIndex, setHoverIndex] = React.useState(null);

    return (
        <tbody>
            {data.map((item, index) => (
                <tr
                    key={item.id}
                    style={index === hoverIndex ? { ...rowStyle, ...rowHoverStyle } : rowStyle}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                >
                    <td style={cellStyle}>{item.id}</td>
                    <td style={cellStyle}>{item.name}</td>
                    <td style={cellStyle}>{item.price}</td>
                    <td style={cellStyle}>{item.quantity}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default Table;
