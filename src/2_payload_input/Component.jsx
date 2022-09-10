import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Component() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <div>
        counter :
        {' '}
        {counter}
      </div>
      <div>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </div>
      <button type="button" className="btn btn-success" onClick={() => dispatch({ type: 'PLUS', payload: inputValue })}>PLUS</button>
      <button type="button" className="btn btn-danger" onClick={() => dispatch({ type: 'MINUS', payload: inputValue })}>MINUS</button>
    </div>
  );
}

export default Component;
