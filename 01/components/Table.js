import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';


class Table extends React.Component {
    sumRows() {
        const { data } = this.props;
        return data.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

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
        const footerStyle = {
            fontWeight: 'bold',
            textAlign: 'left',
            border: '1px solid #ddd',
            padding: '10px',
        };

        return (
            <table style={tableStyle}>
                <TableHeader style={headerStyle} />
                <TableBody data={data} cellStyle={cellStyle} rowStyle={rowStyle} rowHoverStyle={rowHoverStyle} />
                <TableFooter items={['', '', '', '', this.sumRows()]} style={footerStyle}/>
            </table>
        );
    }
}

export default Table;
