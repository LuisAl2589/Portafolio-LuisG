import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Profile from './Components/Profile'
import HeroSection from './Components/HeroSection'
import Tecnologias from './Components/Tecnologias'
import Proyecto from './Components/Proyecto'
import Chart from './Components/Chart'
import pacman from './assets/img/Pacman.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      <div>
        <Nav/>
      </div>
      <div className='app'>
        <div id='sobre-mi' className='heroSection'>
          <Profile/>
          <HeroSection/>
        </div>
        <h2 id='tecnologias' className='sub-titulo'>Tecnologías</h2>
        <div className='tecno'>
          <Tecnologias/>
          <br />
          <hr />
        </div>
        <h2 id='proyectos' className='sub-titulo'>Proyectos</h2>
        <div className='proyectos'> 
        <Proyecto
            name='E-SCOM 🛒'
            image='https://www.advisoryexcellence.com/wp-content/uploads/2022/01/ECOMMERCE-PHOTO.jpg'
            description='E-commerce de la ESCOM con funcionalidades de compra, venta de productos, implementacion de carrito de compras, ademas de un apartado de administrador para pedidos productos y visualizar estadisticas de ventas'
            technologies={[['.NET','fa-brands fa-react'],
                          ['JavaScript','fa-brands fa-js'], 
                          ['CSS','fa-brands fa-css3-alt'],
                          ['MongoDB','fa-brands fa-css3-alt']]}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'/>
          <Proyecto
            name='Pacman Strawberry version 🍓'
            image={pacman}
            description='Imitación del clásico juego Pacman con temática de fresas'
            technologies={[['React','fa-brands fa-react'],
                          ['JavaScript','fa-brands fa-js'], 
                          ['CSS','fa-brands fa-css3-alt'],]}
            deployLink='https://pacman-strawberry.netlify.app'
            githubLink='https://github.com/LuisAl2589/pacmanStrawberry'/>
          <Proyecto
            name='Dibujo con epiciclos 🎨'
            image='https://www.researchgate.net/profile/Juan-Ponce-Campuzano/publication/341775323/figure/fig3/AS:897826951274497@1591070034846/Figura-4-Letra-griega-p_Q320.jpg'
            description='Implemetación de la transformada discreta de Fourier para dibujar figuras con epiciclos. Se muestra la animación de los epiciclos y el dibujo resultante'
            technologies={[['HTML','fa-brands fa-html5'],
                          ['JavaScript','fa-brands fa-js'], 
                          ['CSS','fa-brands fa-css3-alt'],]}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'/>
            <hr />
        </div>

        <h2 id='formacion' className='sub-titulo'>Formación</h2>
        <div className='formacion'>
          
          <Chart
          icono='fa-solid fa-graduation-cap' 
          escuela='ESCOM - Escuela Superior de Cómputo – IPN'
          titulo='Ingeniería en Sistemas Computacionales'
          cursos='Estructuras de Datos, Programación Orientada a Objetos, Bases de Datos, Redes de Computadoras,
                  Desarrollo Web, Análisis y Diseño de Algoritmos, Arquitectura de Computadoras, Matemáticas Discretas, Probabilidad y
                  Estadística'
          lugar='Ciudad de México, México'
          fecha='Agosto 2021 - Presente'/>

          <Chart 
          icono = 'fa-solid fa-book-open-reader'
          escuela='CECyT 9 Juan de Dios Bátiz – IPN'
          titulo='Carrera técnica en programación'
          cursos='Introducción a la Programación, Desarrollo Web, Gestión de Bases de Datos, Fundamentos de Redes.'
          lugar='Ciudad de México, México'
          fecha='Agosto 2018 - Junio 2021'/>

        </div>
      </div>
    </>
  )
}

export default App
