import React from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './reducer';

function Child() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {counter}

      <div>
        <button type="button" className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => dispatch(decrement())}>-</button>
        <button type="button" className="btn btn-warning" onClick={() => dispatch(incrementByAmount(10))}>-</button>
      </div>
    </div>
  );
}

export default Child;
