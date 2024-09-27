import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getValue } from '@testing-library/user-event/dist/utils';
import '../estilos/contacto.css'

function Contacto() {

    const [form,setFrom] = useState({
        name: "",
        apellido: "",
        email: "",
        msg: "",
    })
const [msg,setMsg] = useState(false)

    const handleForm =(e)=>{
      const {name,value} = e.target
      setFrom((prevFrom)=>({...prevFrom,[name]:value}))

    }
    const handleClick =(e)=>{
      e.preventDefault()
      setMsg(true)
//Logica para Enviar el formulario

      console.log("mensaje enviado")
    }

  return (
    <div className='col-12 d-flex align-items-center justify-content-center'>
      <div className='col-12 d-flex align-items-center justify-content-center text-start p-4'>
      <Form className='col-12' >
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
          type='text'
          name='name'
          value={form.name}
          onChange={handleForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>apellido</Form.Label>
          <Form.Control
          type='text'
          name='apellido'
          value={form.apellido}
          onChange={handleForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
          type='email'
          name='email'
          value={form.email}
          onChange={handleForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
          as='textarea'
          name='msg'
          value={form.msg}
          onChange={handleForm}
          minLength={150}
          />
        </Form.Group>
        <div className='d-flex '>
       <Button className='mt-4 btn-sn' onClick={handleClick} style={{width:"120px",borderRadius:"0"}}>Enviar</Button>
       </div>
      </Form>
      </div>


    </div>
  )
}

export default Contacto