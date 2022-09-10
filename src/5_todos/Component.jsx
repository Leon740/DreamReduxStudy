/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Component() {
  const [inputValueSt, setInputValueSt] = useState('');

  const all = useSelector((state) => state.all);
  const completed = useSelector((state) => state.completed);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <input value={inputValueSt} onChange={(event) => setInputValueSt(event.target.value)} />
        <button type="button" className="btn btn-warning" onClick={() => dispatch({ type: 'ADD', payload: { content: inputValueSt, completed: false } })}>Add</button>
      </div>
      <div>
        {all.length > 0 ? (
          <>
            All:
            <ul>
              {
                all.map((todoItem, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <TodoItem data={todoItem} dispatch={() => dispatch({ type: 'COMPLETE', payload: { content: todoItem.content, completed: true } })} />
                  </li>
                ))
              }
            </ul>

            Completed:
            <ul>
              {
                completed.map((todoItem, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <TodoItem data={todoItem} dispatch={() => dispatch({ type: 'COMPLETE', payload: { content: todoItem.content, completed: true } })} />
                  </li>
                ))
              }
            </ul>
          </>
        ) : (
          <>no todos</>
        )}
      </div>
    </>
  );
}

export default Component;

function TodoItem({ data, dispatch }) {
  return (
    <button type="button" className="btn" onClick={dispatch}>{data.content}</button>
  );
}
