import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <header className='header'>
            <a href="" className='logo'></a>
            <nav className='navbar'>
                <input type="checkbox" id='check' />
                <label htmlFor='check' className='checkbtn'>
                    <i className="check fa-solid fa-bars"></i>
                </label>
                <ul>
                    <li><a href="">Sobre mi</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Nav;