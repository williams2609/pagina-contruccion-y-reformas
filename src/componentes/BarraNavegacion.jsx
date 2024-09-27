import React, { useState } from 'react';
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../imagenes/logo reforma.avif';
import '../estilos/navbar.css';

function BarraNavegacion() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(expanded => !expanded);
  };

  return (
    <div className='contenedor-navbar'>
      <Navbar expand="lg" className='contenedor-nav' expanded={expanded} collapseOnSelect>
        <div className='container'>
          <Navbar.Brand className='col-5 col-md-3'>
           <a href='/'><img className="col-10" src={logo} alt="Logo"></img></a>
          </Navbar.Brand>
          <div className='contenedor-links col-xs-2 col-lg-6 d-flex' style={{flexDirection:"column",alignItems:"flex-end"}}>
            {/* Botón de alternancia */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ maxWidth: "70px" }}
              onClick={handleToggle}
              className="toggle-button" // Agregar clase CSS
            >
              <span className={`toggle-icon ${expanded ? 'expanded' : ''}`}>
                {expanded ? <i class="bi bi-x"></i> : '☰'}
              </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
              <Nav className='contenedor-link'>
                <Nav.Link href='/'>
                  <b>Home</b>
                </Nav.Link>
                <Nav.Link href='/SobreNosotros'>
                  <b>Sobre Nosotros</b>
                </Nav.Link>
                <Nav.Link href='/NuestrosProyectos'>
                  <b>Proyectos</b>
                </Nav.Link>
                <Nav.Link href='/Contacto'>
                  <b>Contacto</b>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default BarraNavegacion;