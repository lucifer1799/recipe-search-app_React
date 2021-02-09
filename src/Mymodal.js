import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function Mymodal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.imgUrl} alt='' />
          <h4>Calories : {Math.ceil(props.calories)}</h4>
          {props.ingredients.map((ele,index) => (
            <p key={index}>{ele.text}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default Mymodal;