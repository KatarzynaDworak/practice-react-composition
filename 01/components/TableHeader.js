import React from "react";

export const TableHeader = ({ style }) => {
    return (
        <thead>
            <tr>
                <th style={style}>ID</th>
                <th style={style}>NAME</th>
                <th style={style}>PRICE</th>
                <th style={style}>QUANTITY</th>
                <th style={style}>SUM</th>
            </tr>
        </thead>
    );
}

export default TableHeader;