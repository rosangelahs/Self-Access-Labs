//This component renders and handles all the information when a user logs in in the system


//React
import React,{useState} from 'react'

//React-bootstrap
import {Modal,Form,Button} from 'react-bootstrap'
 
 
export default function LoginForm(logged){
    const [show, setShow] =useState(logged)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const[isLogged, setIsLogged]= useState(false)

    const handleClose = (e) =>{
        setShow(false)
    }

    const handleLogin = (e) =>{
      setIsLogged(true)
     
    }
    return(
        <Modal show ={show} onHide={handleClose } >

        <Modal.Dialog >
        <Modal.Header closeButton>
          <Modal.Title>Inicia sesión</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <Form>
          <Form.Group controlId="formBasicUserName">
    <Form.Label>Usuario</Form.Label>
    <Form.Control type="user" placeholder="Escribe tu usuario" onChange={(e)=>setUser(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <p>{user}</p>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Escribe tu contraseña" onChange={(e)=>setPassword(e.target.value)}/>
    <p>{password}</p>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recuérdame" onChange={(e)=>setRemember(!remember)} />
    <p>{remember}</p>
  </Form.Group>
   
          </Form>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleLogin}>Listo!</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
    );
}