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
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#tecnologias">Tecnologías</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#formacion">Formación</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Nav;