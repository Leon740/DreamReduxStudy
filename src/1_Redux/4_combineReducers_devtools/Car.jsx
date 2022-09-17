/* eslint-disable react/prop-types */
import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';

function Car({ type }) {
  const car = useSelector((state) => state.carReducer[type]);
  const dispatch = useDispatch();

  return (
    <div>
      {type}
      {' '}
      :
      {' '}
      {car}

      <div>
        <input
          value={car}
          onChange={(event) => dispatch({ type: type.toUpperCase(), payload: event.target.value })}
        />
      </div>
    </div>
  );
}

export default Car;
