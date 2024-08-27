import React from 'react';
import './Proyecto.css';

const Proyecto = ({ name, image, description, technologies, deployLink, githubLink }) => {
    return (

        <div className='proyecto'>
            <div className='detalles'>
                <h2>{name}</h2>
                
                <p>{description}</p>
                <ul>
                    {technologies.map((technology, index) => (
                        <li key={index}>{technology}</li>
                    ))}
                </ul>
                
                <div className="icon-container">
                    <a href="https://www.example.com" className="icon-link" target="_blank">
                        <i class="fas fa-link"></i>
                    </a>
                    <a href="https://github.com" className="icon-link" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className='image'>
                <img src={image} alt={name} />
            </div>
        </div>
    );
};

export default Proyecto;