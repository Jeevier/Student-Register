import React from "react";
import Button from "./Button.style";
import Card from "./Card.style";
import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={styles.backdrop} onClick={props.onModal}>
      <Card className={styles.modal}>
        <h4>{props.title}</h4>

        <p>{props.message}</p>

        <Button type="button" onClick={props.onModal}>
          Okay
        </Button>
      </Card>
    </div>
  );
}

export default Modal;
