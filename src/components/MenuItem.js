import React from 'react'

const MenuItem = ({ item }) => {
    const {title, price, img, desc} = item
    return (
        <article className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4>${price}</h4>
                </header>
                <p className='item-desc'>{desc}</p>
            </div>
        </article>
    )
}

export default MenuItem
