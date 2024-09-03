import React from 'react';
import './Proyecto.css';
import mongodb from '../assets/img/mongodb-icon.png';
import c_sharp from '../assets/img/c-sharp-icon.png';

const Proyecto = ({ name, image, description, technologies, deployLink, githubLink }) => {
    return (

        <div className='proyecto'>
            <div className='detalles'>
                <h2>{name}</h2>
                
                <p>{description}</p>
                <div className='container-tecno'>
                {technologies.map((technology, index) => {
                    switch (technology[0]) {
                    case 'MongoDB':
                        return (
                            <div className='tecnologia' key={index}>
                                <img width="48" height="48" src={mongodb} alt="mongodb"/>
                                {technology[0]}
                            </div>
                                );
                    case '.NET':
                        return (
                            <div className='tecnologia' key={index}>
                                <img width="48" height="48" src={c_sharp} alt="c-sharp"/>
                                {technology[0]}
                            </div>
                                );
                    default:
                        return (
                            <div className='tecnologia' key={index}>
                                <i className={technology[1]}></i>
                                {technology[0]}
                            </div>
                                );
                    }
                
                })}
                </div>
                
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