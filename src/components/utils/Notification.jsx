import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { GlobalState } from '../../State/State';

function Notification() {
  const {message } = useContext(GlobalState) 
 

  return (
    <Row>
      <Col md={12} className="mb-2">
        
        <Toast show={message.length > 1 ? true : false}>
          <Toast.Header>
            
            <strong className="me-auto">Notification</strong>
            <small>0s ago</small>
          </Toast.Header>
          <Toast.Body> 
             {message}
          </Toast.Body>
        </Toast>
      </Col>
    
    </Row>
  );
}

export default Notification;