import React from 'react';
import './Chart.css';

const Chart = ({icono, escuela, titulo, cursos, lugar, fecha}) => {
    return (
        <div className='formacion-chart'>
            <div className='icono'>
                <i className={icono}></i>
            </div>
            <div className='detalles'>
                <h3>{escuela}</h3>
                <h4>{titulo}</h4>
                
                <p>{cursos}</p>
            </div>
            <div className='fecha'>
                {lugar}
                <br />
                {fecha}
            </div>
        </div>
    );
}

export default Chart;