import React from 'react';
import ReactDom from 'react-dom'
import Button from 'react-dom';
import useState from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/container';
import a1 from './a1.png';
import Alert from 'react-bootstrap/Alert';
import img from './img.png';
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import Popover from 'react-bootstrap/Popover'
import {OverlayTrigger,overlay} from 'react-bootstrap'
import render from 'react'


import {ToastHeader,Toast,Toastbody} from 'react-bootstrap';







function App() {

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
 
  
  
  return (
    
    
    <div className="root col-12" >
     
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
<hr className='hori'/>

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

<hr className='hori'/>

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
              <img   id='i' src="https://image.shutterstock.com/image-photo/creative-layout-made-flowers-leaves-600w-547784302.jpg" alt="Avatar"/>
          </div>
          <div className='col-sm-4'></div>
          <div id='c1' className="card col-sm-3">
              <img id='i'  src="https://image.shutterstock.com/image-photo/creative-layout-made-flowers-leaves-600w-547784302.jpg" alt="Avatar"/>
          </div>
          <div className='col-sm-1'></div>

       </div>
</div>

</body>
<Jumbotron className='jum1' fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>




    
    
      

</div>

  );
}


export default App;

