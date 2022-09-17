import React, { useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';

function Budget() {
  const budget = useSelector((state) => state.budgetReducer.budget);
  const dispatch = useDispatch();
  const [inputValueSt, setInputValueSt] = useState(budget);

  return (
    <div>
      <div>
        Budget:
        {' '}
        {budget}
      </div>
      <div>
        <input value={inputValueSt} onChange={(event) => setInputValueSt(event.target.value)} />
      </div>
      <div>
        <button type="button" className="btn btn-success" onClick={() => dispatch({ type: 'PLUS', payload: inputValueSt })}> + </button>
        <button type="button" className="btn btn-danger" onClick={() => dispatch({ type: 'MINUS', payload: inputValueSt })}> - </button>
      </div>
    </div>
  );
}

export default Budget;
