/* eslint-disable import/order */
import React, { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  STATUS, fnFetchTodos, fnToggleTodo, fnAddTodo, fnDeleteTodo,
} from './slice';

// React Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Spinner from 'react-bootstrap/Spinner';

function Component() {
  const [stInput, setStInput] = useState('');

  // Theory: fetch data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fnFetchTodos());
  }, []);

  const { todos, status } = useSelector((state) => state);

  console.log(todos);

  return (
    <div>
      <Row>
        <Col xs={9}>
          <Form.Control type="text" placeholder="Type in the text" value={stInput} onChange={(event) => setStInput(event.target.value)} />
        </Col>
        <Col xs={3}>
          <Button variant="primary" className="w-100" onClick={() => dispatch(fnAddTodo(stInput))}>Add todo</Button>
        </Col>
      </Row>

      <div className="mt-5">
        {status === STATUS.pending && <Spinner animation="border" />}

        {status === STATUS.rejected && (
          <h2>Error occured</h2>
        )}

        <ListGroup as="ul">
          {todos.map((todo) => {
            const { id, title, completed } = todo;
            const isCompleted = completed === true;

            return (
              <ListGroup.Item key={id} as="li" variant={isCompleted && 'danger'}>
                <Row>
                  <Col xs={1}>
                    <Form.Check checked={completed} onChange={() => dispatch(fnToggleTodo(id))} />
                  </Col>
                  <Col>
                    <p className={`m-0 ${isCompleted && 'text-decoration-line-through'}`}>
                      {title}
                    </p>
                  </Col>
                  <Col xs={1}>
                    <CloseButton onClick={() => dispatch(fnDeleteTodo(id))} />
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}

export default Component;
