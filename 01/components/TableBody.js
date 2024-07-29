import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data, cellStyle, rowStyle, rowHoverStyle }) => {
    return (
        <tbody>
            <TableRow 
                data={data} 
                cellStyle={cellStyle} 
                rowStyle={rowStyle} 
                rowHoverStyle={rowHoverStyle} 
            />
        </tbody>
    );
}

export default TableBody;
