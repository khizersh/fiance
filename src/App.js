import React,{Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomModal from './ModalCustom';
import './app.css'
import {Container , Row , Col} from "react-bootstrap";
import Slider from './slider';
import Card from './CardCustom';

const App = () => {
  return(

    <div className="bg">
    <Container>
    <CustomModal/>
    <Row>
    <Col>
    <Slider/>
    </Col>
    </Row>
    <Row>
    <Col className="m-l-card">
    <Card/>
    </Col>
    </Row>
    <Row>
    <Col>
    <h3 className="text-center">In the end , i just want to thank you to be a part of my life ...  <img src={require('./images/heart.png')} height="30"/></h3>
    </Col>
    </Row>
    </Container>
    
    </div>
  );
}
export default App;
