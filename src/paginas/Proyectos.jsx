import React from 'react'
import '../estilos/proyectos.css'
import imagen1 from '../imagenes/galeriaProyectos/seccion1/p1.avif'
import imagen2 from '../imagenes/galeriaProyectos/seccion1/p2.avif'
import imagen3 from '../imagenes/galeriaProyectos/seccion1/p3.avif'
import imagen4 from '../imagenes/galeriaProyectos/seccion1/p4.avif'
import imagen5 from '../imagenes/galeriaProyectos/seccion1/p5.avif'
import imagen6 from '../imagenes/galeriaProyectos/seccion1/pt6.avif'
import GaleriaReformas from '../componentes/GaleriaReformas'

function Proyectos() {
  return (
    <div className=''>
        <section className='container' style={{height:"30vh", marginTop:"200px"}} > 
            <div className='row'>
              <div className='col-md-6 col-xs-12'>
                <h3 style={{fontFamily:"sans"}}>Nuestro portafolio se compone de proyectos en toda Valencia</h3>
              </div>
              <div className='col-md-6 col-xs-12'>
                <p style={{marginTop:"120px"}}>Nuestro objetivo es hacer realidad tus sueños.  </p>
              </div>
            </div>
        </section>
        <section className='d-flex align-items-center justify-content-center'> 
          <div className='col-12 col-xl-8'>
          <div className='row d-flex '>
          <div className='col-12 col-md-6 d-flex alignt-items-center justify-content-center'>
          <img  className="imagen1-proyecto img-fluid" src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=633,h=436,fit=crop/m7Vp29prvetaLV7v/photo-1578683010236-d716f9a3f461.jpg"></img>
          </div>
          <div className='col-12 col-md-6'>
            <h3 className='mt-5'>Haciendo realidad tus sueños</h3>
            <p>Le ayudamos a tomar su idea, crear un plan real para lograrla y luego hacerla realidad.</p>
          </div>
          </div>
          </div>
        </section>

        <section className='seccion3-proyectos mt-5 text-center d-flex align-items-center justify-content-center'>
          <h1>Construimos Sueños</h1>
        </section>
        <section className='mt-5 container d-flex flex-column' style={{height:"100%"}}>
          <h2 style={{fontFamily:"sans",fontSize:"2.4rem"}} className='mt-3 mb-3'>Da Iluminación a cada rincon de tu hogar</h2>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <img src={imagen1} className='img-fluid mt-3' style={{with:"100%",height:"100%"}}></img>
            </div>
            <div className='col-12 col-lg-6'>
              <div>
              <img src={imagen2} className='img-fluid mt-3' style={{with:"100%",height:"100%"}}></img>
              </div>
              <div>
              <img src={imagen3} className='img-fluid mt-3' style={{with:"100%",height:"100%"}}></img>
              </div>
            </div>
          </div>
          <div className='row mt-3' style={{height:"100%"}}>
          <img src={imagen4} className='img-fluid mt-3 col-12 col-md-3' style={{with:"100%",height:"100%"}}></img>
          <img src={imagen5} className='img-fluid mt-3 col-12 col-md-5' style={{with:"100%",height:"100%"}}></img>
          <img src={imagen6} className='img-fluid mt-3 col-12 col-md-4' style={{with:"100%",height:"100%"}}></img>
          </div>
        </section>
        <section>
          <GaleriaReformas/>
        </section>

    </div>
  )
}

export default Proyectos