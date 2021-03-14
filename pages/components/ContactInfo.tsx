 

import {Container,Row} from 'react-bootstrap'
 
export default function ContactInfo(){
    
    const socialImages = {facebook: 'C:\Users\Rosi\Documents\Projects\School\laa\images\facebook.png'}
    const Rosangela ={ name : 'Rosangela Herrera Suarez', email : 'mailto:rosangelahs@estudiantes.uci.cu', picture : '../images/rosangela.jpg'} 
    const Lisy = {name: 'Lis Eilin Garcia Rosell', email: 'mailto:lisegr@estudiantes.uci.cu' , picture : '../images/rosangela.jpg'}
    const Yurier = {name : 'Yurier J. Herrera Lugo', email: 'mailto:yurierjhl@estudiantes.uci.cu' , picture : '../images/rosangela.jpg'}
    return(
       <>
       <h4>Contactanos</h4>
        <Row>
   
       <img src={Rosangela.picture}/><a href = {Rosangela.email}><p>{Rosangela.name}</p></a><a href={''}><img src={socialImages.facebook}/></a>
        </Row>
        <Row>
        <img src={Rosangela.picture}/><a href = {Rosangela.email}><p>{Rosangela.name}</p></a><a href={''}><img src={socialImages.facebook}/></a>
         </Row>
        <Row>
        <img src={Rosangela.picture}/><a href = {Rosangela.email}><p>{Rosangela.name}</p></a><a href={''}><img src={socialImages.facebook}/></a>
        </Row>
        </>
           

    );
}