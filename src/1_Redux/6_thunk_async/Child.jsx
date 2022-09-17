import React from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fnFetchUsers } from './reducer';

function Child() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function fnBtnOnClick() {
    dispatch(fnFetchUsers());
    console.log('test');
  }

  return (
    <div>
      <button type="button" className="btn btn-warning" onClick={() => fnBtnOnClick()}>Add users</button>
      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => <li key={user.id}>{user.name}</li>)}
          </ul>
        ) : (
          <div>no users</div>
        )}
      </div>
    </div>
  );
}

export default Child;
