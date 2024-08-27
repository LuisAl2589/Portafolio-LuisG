import React from 'react';
import './HeroSection.css'; // Importa el archivo de estilos CSS

/**
 * HeroSection component.
 * 
 * @returns {JSX.Element} The rendered HeroSection component.
 */

const HeroSection = () => {
    return (
        <section className="hero-section">
            <h6>Hola! , Soy</h6>
            <h1>Luis García</h1>
            <div>
                <a href="https://www.linkedin.com/in/luis-alfonso-garcía-castañeda-7549a025a/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>

                <a href="..\src\assets\CV-Luis_Alfonso_Garcia_Castaneda_Esp.pdf" target='_blank'><i className="fa-solid fa-file"></i></a>
                <a href="https://github.com/LuisAl2589" target='_blank'><i className="fa-brands fa-github"></i></a>
            </div>
            <div id='correo' href="">garcia.castaneda.luis.alfonso@gmail.com</div>
            <p>
            Ingeniero en Sistemas Computacionales en formación, con experiencia en proyectos universitarios y cursos de programación, en busca de oportunidades para aplicar mis conocimientos y habilidades técnicas en un entorno profesional dinámico y desafiante.
            </p>
        </section>
    );
};

export default HeroSection;
