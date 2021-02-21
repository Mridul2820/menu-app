import React from 'react'
import Item from "./Item";

const Menu = ({ items }) => {
    return (
        <div className="section-center">
            {items.map(item => {
                return <Item key={item.id} item={item}/>
            })}
        </div>
    )
}

export default Menu