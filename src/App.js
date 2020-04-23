import React from 'react';
import ReactDom from 'react-dom'
import Button from 'react-dom';
import useState from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';
import { FaBeer, FaGoogle, FaGooglePlus,FaInstagram, FaYoutube } from 'react-icons/fa';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/container';
import a1 from './a1.png';
import Alert from 'react-bootstrap/Alert';
import img from './img.png';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img 4.png'
import img5 from './img 5.png'

import Popover from 'react-bootstrap/Popover'
import {OverlayTrigger,overlay} from 'react-bootstrap'
import render from 'react'
import StickyFooter from 'react-sticky-footer'
import Figure from 'react-bootstrap/Figure'


import {ToastHeader,Toast,Toastbody} from 'react-bootstrap';



const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Content>
  </Popover>
);



const example = () =>(
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
  <Button variant="success">Click me to see</Button>
</OverlayTrigger>
)




function App() {
  
  
  return (
    
    <>
    <div className="root col" >
     
      <Navbar sticky='top' className='navbar' collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home">colors</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>

      <Nav.Link eventKey={2} href="#memes">
        About
      </Nav.Link>
      <Nav.Link href="#deets">More</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

<body>
<Jumbotron  className='jum'>
  <Container>
    <img  className='img' src={a1} alt='src'></img>
    <h1 className='hh'>I'm Arvind</h1>
    
  </Container>
</Jumbotron>
<hr />

<div id='c'>
     <div className="row">
        <div className='col-sm-1'></div>
          <div id='c1' className="card col-sm-3">
           <button className='b'><img  id='i' src={img} alt={img}/></button>
            
          </div>
          <div className='col-sm-4'></div>
          <div id='c1' className="card col-sm-3">
              <img id='i' src={img1} alt={img1}/>
          </div>
          <div className='col-sm-1'></div>

       </div>
</div>

<hr />

<div id='c'>
     <div className="row">
        <div className='col-sm-1'></div>
          <div id='c1' className="card col-sm-3">
              <img   id='i'src={img2} alt={img2}/>
          </div>
          <div className='col-sm-4'></div>
          <div id='c1' className="card col-sm-3">
              <img id='i'  src={img3} alt={img3}/>
          </div>
          <div className='col-sm-1'></div>

       </div>
</div>

<hr/>

<div id='c'>
     <div className="row">
        <div className='col-sm-1'></div>
          <div id='c1' className="card col-sm-3">
              <img   id='i' src={img4} alt="Avatar"/>
          </div>
          <div className='col-sm-4'></div>
          <div id='c1' className="card col-sm-3">
              <img id='i'  src={img5} alt="Avatar"/>
          </div>
          <div className='col-sm-1'></div>

       </div>

       <hr />
       <Jumbotron  className='jum'fluid>
  <Container>
    <button className='b' href='https://www.youtube.com/results?search_query=painting+of+flowers+by+bannu'>
      <FaYoutube  color='black' size={200}/>
      
  
</button>
  </Container>
</Jumbotron>
</div>

</body>



    
    
      

</div>
<div>
<footer className="page">
<a href='https://www.instagram.com/sireesha_kosuru/'className='a'> <FaInstagram  color="black" size={50} title='instagram' /></a>

<div  class="footer-copyright text-center py-3"><strong>© 2020 Copyrights Colors</strong>
<li><small>This is a page where you can explore some colors</small></li> 
  
</div>

</footer>

</div>


</>

  );
}


export default App;

