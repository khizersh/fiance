import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './app.css'

const ModalCustom = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  let url = "gift/src/images/modal.jpg"
  return (
    <Modal show={show} onHide={handleClose} >
   
        <Modal.Header closeButton  className="bg-pink">
          <Modal.Title style={{color : 'pink'}}><i>Happy 1st Anniversary, May Allah bless you , Thank you for all...
          <img src={require('./images/heart.png')} height="30"/>
          </i></Modal.Title>
        </Modal.Header>
<img  src={require('./images/carrr.jpg')} height="400" alt="text"/>
        
        <Modal.Body className="bg-pink">
          <i><p  style={{color : 'pink'}}>The first time I saw your face, I knew you were the girl of my dreams, the one I will love.</p></i>
        </Modal.Body>

    </Modal>
  );
};

export default ModalCustom;
