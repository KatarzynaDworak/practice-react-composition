import React from "react";

const List = props => {
        const { items } = props;
        const list = items.map(n => <Item name={n} />)

        return <ul>{ list }</ul>
}

const Item = props => {
    return <li>{ props.name }</li>
}
export default List;