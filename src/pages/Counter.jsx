import React from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(counterAction.increment());
  }
  function handleDecrement() {
    dispatch(counterAction.decrement());
  }

  function handleReset() {
    dispatch(counterAction.reset());
  }

  return (
    <>
      <p>Counter</p>
      <h1>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Count</InputGroup.Text>
          <br />
          <Form.Control
            aria-describedby="basic-addon1"
            value={counter}
            disabled
          />
        </InputGroup>
      </h1>
      <div className="d-flex gap-2 justify-content-center">
        <Button variant="primary" onClick={handleIncrement}>
          Add +
        </Button>
        <Button variant="warning" onClick={handleDecrement}>
          Minus -
        </Button>
        <Button variant="danger" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </>
  );
}
