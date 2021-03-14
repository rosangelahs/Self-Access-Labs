import {Button} from 'react-bootstrap'
 
export default function NewsLetter(){
    return(
<div  >
<h4>Suscríbete a nuestro boletín</h4><br/>
<input type = 'email' className= 'form-control' placeholder='ejemplo@gmail.com'/>
<Button  >Aceptar</Button>
</div>

    );
}