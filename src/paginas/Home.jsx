import React from 'react';
import { Button } from 'react-bootstrap';
import '../estilos/home.css';
import imagen1 from '../imagenes/photo-1518733057094-95b53143d2a7.avif';
import imagen2 from '../imagenes/photo-1512972972907-6d71529c5e92.avif';
import imagen3 from '../imagenes/galeriaHome/20230325_092937_IMG_0689 (1).jpg';
import imagen4 from '../imagenes/galeriaHome/Default_renovated_bathrooms_0.jpg';
import imagen5 from '../imagenes/galeriaHome/Default_renovated_bathrooms_1.jpg';
import imagen6 from '../imagenes/galeriaHome/photo-1502005097973-6a7082348e28 (1).avif';
import imagen7 from '../imagenes/galeriaHome/photo-1518733057094-95b53143d2a7.avif';
import imagen8 from '../imagenes/galeriaHome/imagen9.avif';
import imagensec1 from '../imagenes/galeriaHome/Leonardo_Phoenix_A_highly_detailed_architectural_plan_lies_fla_0.jpg';
import imagensec2 from '../imagenes/galeriaHome/photo1.avif';
import Mapa from '../componentes/MapaInteractivo';
import Contacto from '../componentes/Contacto';
function Home() {
  return (
    <div className='contenedor-home'>
      <section className='section'>
        <div className='container contenedor-parrafo'>
          <p className='parrafo-imagen'>Crea un hogar que refleje a tu familia</p>
        </div>
        <div className='contenedor-boton container'>
          <Button className='boton-ver-proyectos btn btn-secondary'>Ver Nuestros Proyectos</Button>
        </div>
      </section>

      <div className='container mb-5 contenedor-cont'>
  <div className='row contenedor-items'>
    <div className='col-12 col-md-5 d-flex justify-content-end contenedor-imagen1'>
      <img src={imagen1} className='imagen1 img-fluid' alt="Descripción de la imagen 1" />
    </div>
    <div className='col-12 col-md-7 text-start'>
      <h2 className='mb-3'>Sobre Nosotros</h2>
      <p className='mb-5'>Nuestro equipo de expertos en diseño se asegura de que su hogar se vea y se sienta como usted.</p>
      <button className='btn btn-sn mb-5'>Sobre Nosotros</button>
      <img src={imagen2} className='imagen2 img-fluid' alt="Descripción de la imagen 2" />
    </div>
  </div>
</div>

<section className='contenedor-orgu container-fluid text-center d-flex align-items-center flex-column'>
  <h3>De qué estamos orgullosos</h3>
  <div className='col-12 col-md-6'>
    <p>Hemos trabajado con una amplia gama de clientes y creado docenas de espacios diferentes en diversas formas y tamaños.</p>
  </div>


  <div className='row contenedor-img d-flex align-items-center justify-content-center'>
  <div className='col-7 col-lg-4 d-flex flex-column' style={{ height: "100vh", marginBottom:"20px"}}>
  <div className="d-flex" style={{ flex: "0 0 40%", width: "100%",marginTop:"10px" }}>
      <img src={imagen4} className="img-fluid" alt="Descripción de la imagen 4" style={{ marginTop: "20px", height:"100%", objectFit: "cover", width:"100%" }} />
    </div>
    <div className="d-flex" style={{ flex: "0 0 60%", width: "100%",marginTop:"30px", overflow:"hidden"}}>
    <img src={imagen7} className='img-fluid imagen7'></img>
    </div>
  </div>
  
  {/* Columna central con dos imágenes */}
  <div className='col-7 col-lg-4 d-flex flex-column' style={{ height: "100vh" }}>
    {/* Imagen que ocupa el 60% del alto */}
    <div className="d-flex" style={{ flex: "0 0 50%", width: "100%",marginTop:"10px" }}>
      <img src={imagen5} className="img-fluid" alt="Descripción de la imagen 5" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
    </div>
    {/* Imagen que ocupa el 40% del alto */}
    <div className="d-flex" style={{ flex: "0 0 50%", width: "100%",marginTop:"10px" }}>
      <img src={imagen8} className="img-fluid" alt="Descripción de la imagen 8" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
    </div>
  </div>
  
  <div className='col-7 col-lg-4 d-flex flex-column' style={{ height: "100vh", marginTop:"20px" }}>
    {/* Añadir imágenes o contenido aquí */}
    <div className="d-flex" style={{ flex: "0 0 40%", width: "100%",marginTop:"10px" }}>
      <img src={imagen6} className="img-fluid" alt="Descripción de la imagen 8" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      <div style={{flex:"0 0 60%", width:"100%", marginTop:"10px"}}>
      <img src={imagen3} className='img-fluid'alt='Descipcion de la imagen3' style={{objectFit:"cover", width: "100%", height: "100%" }}></img>
      </div>
  </div>
</div>

<button className='btn btn-sn mb-5 mt-5'>Ver Nuestros Proyectos</button>
</section>

    <section className='seccion-pt2 mt-5' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imagensec1})`}}>
      <div className='row d-flex container'>
      <div className='col-6 text-center d-flex align-items-center'>
      <h1 style={{fontFamily:"sans", fontWeight:"bold"}}>NUESTRA HISTORIA</h1> 
      </div>
      <div className='col-5' style={{fontSize:"0.9rem"}}>
      <p className='text-start'>CreateInterior comenzó como una iniciativa en línea para resaltar 
        espacios interiores que reflejaban la personalidad de sus habitantes . 
        Ahora somos un equipo multifuncional de Diseñadores,Constructores y Reformistas que nos 
        esforzamos por crear hogares personales para nuestros clientes. Queremos ayudarle a crear un 
        hogar en el que se sienta cómodo y, lo más importante, como si fuera algo especial y 
        significativo para usted.</p>
        </div>
        </div>
    </section>
    
    <section className="container mt-5"style={{height:"100%"}}>
    <div>
      <h2 style={{fontFamily:"sans",fontWeight:"bold"}}>Nuestra Oficina</h2>
      <p style={{fontFamily:"sans-serif"}}>C Barcelona N23 Valencia, Valencia 43002</p>
    </div>
    <div className='row'> 
      <div className='col-12 col-lg-6 mb-3'>
      <img className="img-fluid" src={imagensec2} style={{width:"100%", height:"350px",objectFit:"cover"}}></img>
      </div>
      <div className='col-12 col-lg-6'>
        <Mapa />
      </div>
    </div>

    </section>
    
    <section className='seccion-contacto-home container d-flex'>
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
    </section>

    </div>
  );
}

export default Home;