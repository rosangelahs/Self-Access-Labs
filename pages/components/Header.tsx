 //react
 import React, {useState} from 'react'
 
 //react-bootstrap
import {Button, FormControl, Form,Row,Container,Navbar, Nav, NavDropdown} from 'react-bootstrap'

//next
import Link from 'next/link'

import generalStyles from '../../styles/general.module.css'

import LoginForm from './LoginForm'
import CreateAccountForm from './CreateAccountForm'
 export default function Header(){
  const[wantsLogin, setWantsLogin] = useState(false)
  const[wantsAccount, setWantsAccount] = useState(false)

const onLogin = () =>{
setWantsLogin(true)
}

const onCreateAccount = () =>{
setWantsAccount(true)
}

const onLogout = () =>{

}
return(
  <Container fluid>
<Navbar bg = "light" expand = "lg">
<Navbar.Toggle aria-controls = "basic-navbar-nav"/>
<Navbar.Collapse id = "basic-nabvar nav">
    <Nav className = "mr-auto">
        <Link href = "#home">Inicio
        </Link>
        <Link href = "./Reservation" >Reservar
        </Link>
        <Link href = "./Certification_Page">Examenes de Certificacion
        </Link>
        <NavDropdown title = "Materiales" id = "basic-nav-dropdown"> 
            <NavDropdown.Item href = "#action3.1">Videos</NavDropdown.Item>
            <NavDropdown.Item href = "#action3.1">Programas</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href = "#action3.1">Imágenes</NavDropdown.Item>
        </NavDropdown>
       
        
        <Form inline>

              <FormControl type = "text" placeholder = "Buscar" className = "mr-sm-2"/>
              <Button className={generalStyles.buttons}>Buscar</Button>
              <Button className={generalStyles.buttons} onClick={onLogin}>Iniciar Sesion</Button>
              {wantsLogin && <LoginForm logged={wantsLogin}   />}
              <Button className={generalStyles.buttons} onClick={onCreateAccount}>Registrate</Button>
              {wantsAccount && <CreateAccountForm show={wantsAccount}/>}
               
              </Form>
    </Nav>

</Navbar.Collapse> 
</Navbar>
</Container>
 
 
 
);
}