import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  increment, decrement, incrementByAmount, multiply,
} from './actions';

function Child() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {counter}

      <div>
        <button type="button" className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
        <button type="button" className="btn btn-warning" onClick={() => dispatch(incrementByAmount(10))}>+ 10</button>
        <button type="button" className="btn btn-warning" onClick={() => dispatch(multiply(2))}>*</button>
        {/* addDefaultCase */}
        <button type="button" className="btn btn-info" onClick={() => dispatch({ type: 'test' })}>default</button>
      </div>
    </div>
  );
}

export default Child;
