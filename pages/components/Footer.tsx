import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactInfo from './ContactInfo'
import NewsLetter from './NewsLetter'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

 export default function Footer(){
    return(
         <Jumbotron style= {{width:"100%"}}>
             <Container>
             <Row>
                 <Col>
                 <ContactInfo/>
                 </Col>
                 <Col>
                 <NewsLetter/>
                 </Col>
             </Row>

             </Container>
           
         </Jumbotron>
      
     
        

    );
}