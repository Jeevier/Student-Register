import React from "react";
import Card from "../UI/Card.style";
import styles from "./DisplayList.module.css";
import ListItem from "./ListItem";

function DisplayList(props) {
  return (
    <Card>
      <ul className={styles["list-items"]}>
        {props.items.map((item) => {
          return <ListItem key={item.id} name={item.name} age={item.age} />;
        })}
      </ul>
    </Card>
  );
}

export default DisplayList;
