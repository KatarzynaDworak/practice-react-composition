import React from "react";

const List = props => {
        const { items } = props;
        const list = items.map(n => <Item key={n} name={n} />)

        return <ul>{ list }</ul>
}

const Item = props => {
    return <li key={props.name}>{ props.name }</li>
}
export default List;