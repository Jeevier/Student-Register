import { useState } from "react";
import styles from "./App.module.css";
import DisplayList from "./Components/Display/DisplayList";
import UserInput from "./Components/Input/UserInput";
import Card from "./Components/UI/Card.style";

function App() {
  const [userInputs, setUserInput] = useState([]);

  const submitHandler = (enteredData) => {
    const userInput = {
      ...enteredData,
      id: Math.random().toString(),
    };
    setUserInput((prevData) => {
      return [...prevData, userInput];
    });
  };

  let content = <Card>Found no Data !</Card>;

  if (userInputs.length > 0) {
    content = <DisplayList items={userInputs} />;
  }

  return (
    <div className={styles.app}>
      <UserInput onSubmit={submitHandler} />
      {content}
    </div>
  );
}

export default App;
