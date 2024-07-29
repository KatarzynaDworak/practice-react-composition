import React from "react";

const TableRow = ({ data, cellStyle, rowStyle, rowHoverStyle }) => {
    const [hoverIndex, setHoverIndex] = React.useState(null);

    return (
        <>
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
                    <td style={cellStyle}>{item.price * item.quantity}</td>
                </tr>
            ))}
        </>
    );
}

export default TableRow;
