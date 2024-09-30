import React from 'react'
import Contacto from '../componentes/Contacto'

function SoBreNosotros() {
  return (
    <div className='contenedor-pagina-contacto'>
      <section style={{height:"60vh"}} className='d-flex text-center align-items-center justify-content-center seccion-color'>
        <div className='text-center d-flex flex-column justify-content-center align-items-center'>
          <h1 style={{fontFamily:"sans", fontSize:"3.1rem"}}>Espacios con personalidad</h1>
          <p style={{fontFamily:"cursive",fontSize:"0.8rem"}} className='mt-5 col-8'>CreateInterior es un equipo multifuncional de profesionales que se esfuerzan por ayudarlo a crear un espacio que refleje su personalidad y necesidades.</p>
        </div>
      </section>
      <section className='seccion-contacto'>

      </section>
      <section className="contenedor-contactanos">
     <div className='container'>
      <div className='row col-12'>
      <div className='col-12 col-md-5 d-flex flex-column text-start'>
        <h2 className='mt-5' style={{fontFamily:"sans"}}>Ponerse en contacto</h2>
          <p className='mt-5' style={{fontFamily:"sans-serif"}}>Valencia</p>
          <p style={{fontFamily:"sans-serif"}}>Calle Barcelona N23  </p>
          <p className='mt-5' style={{fontFamily:"sans-serif"}}>Contacto</p>
          <p style={{fontFamily:"sans-serif", fontSize:"0.8rem"}}>643-486-830</p>
          <p style={{fontFamily:"sans-serif", fontSize:"0.8rem"}}>info@reformas.cloud</p>
          <div className='mt-3'>
          <i className="bi bi-facebook" style={{marginRight:"20px",marginLeft:"15px"}}></i>
          <i className="bi bi-twitter" style={{marginRight:"20px"}}></i>
          <i className="bi bi-instagram"></i>
          </div>
      </div>
      <div className='col-12 col-md-7 mt-5'>
      <Contacto/>
      </div>
      </div>
      </div>
      </section>

    </div>
  )
}

export default SoBreNosotros