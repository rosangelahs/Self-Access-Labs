 
import React, {useState} from 'react'

//React-bootstrap
import {Modal,Form, Button} from 'react-bootstrap'

//Components
import Layout from './components/Layout'
export default function Certification_Page(){
    const [user, setUser] = useState('')
    const [laboratorio, setLaboratorio] = useState('')
    const [pc, setPc] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [notification, setNotification] = useState('')
return(
<Layout home>
<Form>
 
 <Form.Group controlId="formBasicUser">
              <Form.Label><b>Usuario</b></Form.Label>
              <Form.Control type="user" placeholder="Escribe tu usuario" onChange={(e)=>setUser(e.target.value)}/>
              <p>{user}</p>
              </Form.Group>
              <Form.Group>
            <Form.Label><b>Laboratorio:</b></Form.Label>
            <Form.Control as = "select" onChange={(e)=>setLaboratorio(e.target.value)}> 
             <option>Laboratorio 1</option>
            <option>Laboratorio 2</option>
            </Form.Control>
            <p>{laboratorio}</p>
        </Form.Group>
        <Form.Group>
            <Form.Label><b>PC:</b></Form.Label>
            <Form.Control as = "select" onChange={(e)=>setPc(e.target.value)}> 
            <option>Pc 1</option>
            <option>Pc 2</option>
            </Form.Control>
            <p>{pc}</p>
        </Form.Group>
        <Form.Group>
            <Form.Label><b>Fecha:</b></Form.Label>
            <Form.Control type = "date" onChange={(e)=>setFecha(e.target.value)}/>
            <p>{fecha}</p>
        </Form.Group>
        <Form.Group>
            <Form.Label><b>Hora:</b></Form.Label>
            <Form.Control type = "time" onChange={(e)=>setHora(e.target.value)}/>
            <p>{hora}</p>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Enviar Notificacion Recordatoria" onChange={(e)=>setNotification(e.target.value)} />
    <p>{notification}</p>
  </Form.Group>
 
        <Form.Group>
        <Button >Reservar</Button>
        </Form.Group>
 
</Form>
</Layout>

 
);
}