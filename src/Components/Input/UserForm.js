import React, { useState } from "react";
import Button from "../UI/Button.style";
import styles from "./UserForm.module.css";
import Modal from "../UI/Modal";

function UserForm(props) {
  const [enteredData, setEnteredData] = useState({ name: "", age: "" });
  const [inValidForm, setInValidForm] = useState(false);
  const [inValidAge, setInValidAge] = useState(false);
  const nameHandler = (e) => {
    setEnteredData((prevData) => {
      return { ...prevData, name: e.target.value };
    });
  };
  const ageHandler = (e) => {
    setEnteredData((prevData) => {
      return { ...prevData, age: e.target.value };
    });
  };
  const modalHandler = () => {
    setInValidForm(false);
    setInValidAge(false);
  };
  const submitBtnHandler = (e) => {
    e.preventDefault();

    if (enteredData.name === "" || enteredData.age === "") setInValidForm(true);
    else if (enteredData.age <= 0) setInValidAge(true);
    else props.onSubmit(enteredData);
  };
  const modal = (
    <Modal
      onModal={modalHandler}
      content={
        inValidForm
          ? "Please enter a valid name and age(non-empty values)."
          : inValidAge ? "Please enter a valid age(>0).": null
      }
    ></Modal>
  );
  return (
    <form className={styles[`user-form`]} onSubmit={submitBtnHandler}>
      <label>UserName</label>
      <input type="text" onChange={nameHandler} value={enteredData.name} />
      <label>Age(Years)</label>
      <input type="number" onChange={ageHandler} value={enteredData.age} />
      <Button>Add User</Button>
      {inValidAge && modal}
      {inValidForm && modal}
    </form>
  );
}

export default UserForm;
