import React from "react";

export const TableFooter = ({ items, style }) => {

    return (
        <tfoot>
            <tr>
                {items.map((item, index) => (
                    <td key={index} style={style}>{item}</td>
                ))}
            </tr>
        </tfoot>
    );
}

export default TableFooter;