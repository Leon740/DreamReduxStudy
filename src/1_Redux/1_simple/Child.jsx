import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';

function Child() {
  // Steps
  // 1) useDispatch to handle action
  // 2) useSelector to get state
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <div>
        counter:
        {' '}
        {counter}
      </div>
      <button type="button" className="btn btn-success" onClick={() => dispatch({ type: 'PLUS' })}>+ 1</button>
      <button type="button" className="btn btn-danger" onClick={() => dispatch({ type: 'MINUS' })}>- 1</button>
    </div>
  );
}

export default Child;
