import React from "react";

const List = props => {
    const { items } = props;

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    };

    const listItemStyle = {
        padding: '10px 20px',
        margin: '5px 0',
        backgroundColor: '#f2f2f2',
        border: '1px solid #ddd',
        borderRadius: '4px',
    };

    const list = items.map(n => <Item key={n} name={n} style={listItemStyle} />)

    return <ul style={listStyle}>{ list }</ul>
}

const Item = props => {
    return <li style={props.style}>{ props.name }</li>
}

export default List;
