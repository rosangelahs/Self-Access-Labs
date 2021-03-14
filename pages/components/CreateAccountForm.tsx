 
import React, {useState} from 'react'

//React-bootstrap
import {Modal,Form, Button} from 'react-bootstrap'
export default function CreateAccountForm(accounted ){
    const [show, setShow] =useState(accounted)
    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [edad, setEdad] = useState('')
    const [sexo, setSexo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [email,setEmail] = useState('')


    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const[hasAccount, setHasAccount] = useState(false)


    const handleClose = (e) =>{
        setShow(false)
    }
    const handleCreateAccount = (e) =>{
      setHasAccount(true)
    }
        return(
            <Modal show ={show} onHide={handleClose } >
    
            <Modal.Dialog >
            <Modal.Header closeButton>
              <Modal.Title>Crea una cuenta</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
              <Form>

              <Form.Group controlId="formBasicUser">
              <Form.Label  >Nombre y apellidos</Form.Label>
              <Form.Control type="user" placeholder="Escribe tu nombre y apellidos" onChange={(e)=>setName(e.target.value)}/>
              <p>{name}</p>
              </Form.Group>

              <Form.Group controlId="formBasicUserName">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="user" placeholder="Escribe tu usuario" onChange={(e)=>setUser(e.target.value)}/>
              <p>{user}</p>
              </Form.Group>

              <Form.Group controlId="formBasicUserName">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number"   onChange={(e)=>setEdad(e.target.value)}/>
              <p>{edad}</p>
              </Form.Group>

              <Form.Group controlId="formBasicUserName">
              <Form.Label>Sexo</Form.Label>
              <Form.Control as="select"  onChange={(e)=>setSexo(e.target.value)}>
              <option>Mujer</option>
              <option>Hombre</option>
              </Form.Control>
              <p>{sexo}</p>
              </Form.Group>

            <Form.Group>
            <Form.Label><b>Direccion de correo:</b></Form.Label>
            <Form.Control type = "email"  placeholder='ejemplo@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
            <p>{email}</p>
             </Form.Group>

              <Form.Group controlId="formBasicUserName">
              <Form.Label>Categoria</Form.Label>
              <Form.Control as="select"  onChange={(e)=>setCategoria(e.target.value)}>
                <option>Estudiante</option>
                <option>Trabajador</option>
              </Form.Control>
              <p>{categoria}</p>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Escribe tu contraseña" onChange={(e)=>setPassword(e.target.value)}/>
              <p>{password}</p>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recuérdame" onChange={(e)=>setRemember(!remember)}/>
              <p>{remember}</p>
              </Form.Group>
       
              </Form>
             </Modal.Body>
          
             <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
              <Button variant="primary" onClick={handleCreateAccount}>Listo!</Button>
              </Modal.Footer>
              </Modal.Dialog>
              </Modal>
        );

   
}