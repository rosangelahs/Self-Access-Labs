import{useState} from 'react'

 //react-bootstrap
 import Container from 'react-bootstrap/Container'
 import Row from 'react-bootstrap/Row'
 import Col from 'react-bootstrap/Col'

//components
import Header from './components/Header'
import SiteInfo from './components/SiteInfo'
 import Footer from './components/Footer'
import Reservation from './Reservation'
import Layout from './components/Layout'

import Link from 'next/link'


export default function Home() {

 
  
  return (
  <Layout home>
    
  <Row>
   <Reservation/>
 </Row>
 
    </Layout>
    
  )
}
