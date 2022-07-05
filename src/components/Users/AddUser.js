import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef(); // useRef => current 프로퍼티를 갖는 객체
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    // +를 붙힘으로서 숫자형으로 만든다
    // enteredAge를 입력하는 input type이 number
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age( > 0 ).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ""; // DOM을 조작하기위해 ref를 사용하는 경우는 드물다
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      {/* html 컴포넌트가 아닌경우 */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef} // ref 에 들어있는 값이 실제 DOM의 요소가 된다
          />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
