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
        <div className='heroSection'>
          <Profile/>
          <HeroSection/>
        </div>
        <h2 className='sub-titulo'>Tecnologías</h2>
        <div className='tecno'>
          <Tecnologias/>
          <br />
          <hr />
        </div>
        <h2 className='sub-titulo'>Proyectos</h2>
        <div className='proyectos'> 
        
          <Proyecto
            name='Dibujo con Epicilos'
            image='https://via.placeholder.com/150'
            description='Descripción del proyecto 1'
            technologies={['Tecnología 1', 'Tecnología 2', 'Tecnología 3']}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'
          />
          <Proyecto
            name='Carrito de compras E-SCOM'
            image='https://via.placeholder.com/150'
            description='Descripción del proyecto 2'
            technologies={['Tecnología 1', 'Tecnología 2', 'Tecnología 3']}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'
          />
          <Proyecto
            name='Pacman con React'
            image={pacman}
            description='Descripción del proyecto 3'
            technologies={['Tecnología 1', 'Tecnología 2', 'Tecnología 3']}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'/>
            <hr />
        </div>

        <h2 className='sub-titulo'>Formación</h2>
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
