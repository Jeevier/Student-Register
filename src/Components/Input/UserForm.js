import React, { useState } from "react";
import Button from "../UI/Button.style";
import styles from "./UserForm.module.css";
import Modal from "../UI/Modal";

function UserForm(props) {
  const [enteredData, setEnteredData] = useState({ name: "", age: "" });
  const [error, setError] = useState();
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
    setError(null);
  };
  const submitBtnHandler = (e) => {
    e.preventDefault();

    if (enteredData.name.trim() === "" || enteredData.age === "") {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredData.age <= 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age(>0).",
      });
      return;
    }
    props.onSubmit(enteredData);

    enteredData.age = "";
    enteredData.name = "";
  };

  return (
    <form className={styles[`user-form`]} onSubmit={submitBtnHandler}>
      <label>UserName</label>
      <input type="text" onChange={nameHandler} value={enteredData.name} />
      <label>Age(Years)</label>
      <input type="number" onChange={ageHandler} value={enteredData.age} />
      <Button>Add User</Button>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onModal={modalHandler}
        />
      )}
    </form>
  );
}

export default UserForm;
