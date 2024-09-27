import React from 'react'
import Contacto from '../componentes/Contacto'
import { Card } from 'react-bootstrap'
import MapaInteractivo from '../componentes/MapaInteractivo'

function PaginaContacto() {
  return (
    <div className='container'>

        <div style={{marginTop:"150px"}}>
            <MapaInteractivo/>
        </div>    
        <seccion className="contenedor-contactanos1">
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
                <i class="bi bi-facebook" style={{marginRight:"20px",marginLeft:"15px"}}></i>
                <i class="bi bi-twitter" style={{marginRight:"20px"}}></i>
                <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div className='col-12 col-md-7 mt-5'>
            <Contacto/>
            </div>
            </div>
            </div>
          </seccion>
    </div>
  )
}

export default PaginaContacto