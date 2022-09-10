/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Child() {
  const [stInputValue, setStInputValue] = useState('');
  const todos = useSelector((state) => state.todos);
  const todosCompleted = todos.filter((todo) => todo.completed === true);
  const todosIncompleted = todos.filter((todo) => todo.completed === false);
  const dispatch = useDispatch();

  function fnGetTodoId() {
    // eslint-disable-next-line no-shadow
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return maxId + 1;
  }

  function fnAddBtnOnClick() {
    dispatch({ type: 'ADD', payload: { id: fnGetTodoId(), text: stInputValue } });
    setStInputValue('');
  }

  return (
    <div>
      <Form.Group className="mb-5 d-flex">
        <Form.Control type="text" placeholder="Add todo" value={stInputValue} onChange={(event) => setStInputValue(event.target.value)} />
        <Button type="button" variant="primary" onClick={() => fnAddBtnOnClick()}>Add</Button>
      </Form.Group>

      <DisplayTodos type="All" todos={todos} />
      <DisplayTodos type="Completed" todos={todosCompleted} />
      <DisplayTodos type="Incompleted" todos={todosIncompleted} />
    </div>
  );
}

export default Child;

function DisplayTodos({ type, todos }) {
  const dispatch = useDispatch();

  return (
    <section>
      <h2 className="mb-3">
        {todos.length}
        {' '}
        {type}
      </h2>
      {
        todos.length > 0 && (
          <ul className="list-group">
            {todos.map((todo) => (
              <li key={todo.id} className="list-group-item d-flex">
                <Form.Check type="checkbox" onChange={() => dispatch({ type: 'TOGGLE', payload: { id: todo.id, text: todo.text } })} />
                <span className="ms-3">{todo.text}</span>
              </li>
            ))}
          </ul>
        )
      }
    </section>
  );
}
