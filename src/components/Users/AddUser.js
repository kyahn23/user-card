import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnterredUserName] = useState("");
  const [enteredAge, setEnterredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // +를 붙힘으로서 숫자형으로 만든다
    // enteredAge를 입력하는 input type이 number
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnterredUserName("");
    setEnterredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnterredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterredAge(event.target.value);
  };

  return (
    // html 컴포넌트가 아닌경우
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
