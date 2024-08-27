import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Profile from './Components/Profile'
import HeroSection from './Components/HeroSection'
import Tecnologias from './Components/Tecnologias'
import Proyecto from './Components/Proyecto'
import Chart from './Components/Chart'

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
        <div className='tecno'>
          <Tecnologias/>
        </div>
        <div className='proyectos'>
          <hr />
          <h2 className='sub-titulo'>Proyectos</h2>
          <Proyecto
            name='Proyecto 1'
            image='https://via.placeholder.com/150'
            description='Descripción del proyecto 1'
            technologies={['Tecnología 1', 'Tecnología 2', 'Tecnología 3']}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'
          />
          <Proyecto
            name='Proyecto 2'
            image='https://via.placeholder.com/150'
            description='Descripción del proyecto 2'
            technologies={['Tecnología 1', 'Tecnología 2', 'Tecnología 3']}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'
          />
          <Proyecto
            name='Proyecto 3'
            image='https://via.placeholder.com/150'
            description='Descripción del proyecto 3'
            technologies={['Tecnología 1', 'Tecnología 2', 'Tecnología 3']}
            deployLink='https://deploy-link.com'
            githubLink='https://github-link.com'/>
            <hr />
        </div>

        <h2>Formación</h2>
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
          escuela='ESCOM - Escuela Superior de Cómputo – IPN'
          titulo='Ingeniería en Sistemas Computacionales'
          cursos='Estructuras de Datos, Programación Orientada a Objetos, Bases de Datos, Redes de Computadoras,
                  Desarrollo Web, Análisis y Diseño de Algoritmos, Arquitectura de Computadoras, Matemáticas Discretas, Probabilidad y
                  Estadística'
          lugar='Ciudad de México, México'
          fecha='Agosto 2021 - Presente'/>

        </div>
      </div>
    </>
  )
}

export default App
