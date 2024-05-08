import React, { useState } from "react";

const Header = (props) => {
    const [isOpen, setOpen] = useState();

    return ( 
        <header className='header'>
            <ul className='header__nav'>
                <li className='nav-item'><a href='#sight'>Достопримечательности</a></li>
                <li className='nav-item'><a href='#about'>О Покровске</a></li>
            </ul>
            <button className='nav__btn' onClick={() => setOpen(!isOpen)}></button>
            <div className={`nav__bar ${isOpen ? "active" : ""}`}>
                <ul className='header__nav active'>
                    <li className='nav-item'><a href='#sight'>Достопримечательности</a></li>
                    <li className='nav-item'><a href='#about'>О Покровске</a></li>
                </ul>
            </div>
        </header>
    );
}
 
export default Header;