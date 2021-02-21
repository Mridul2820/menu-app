import { useState } from "react";
import './App.scss';

import Menu from './components/Menu'
import Categories from './components/Categories'
import items from './data'

const App = () => {

    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);



    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default App