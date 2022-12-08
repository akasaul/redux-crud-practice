import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/users';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

export default function App() {
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();
  return (
    <div>
      <div className="addUser">
        <input
          id="name"
          type="text"
          placeholder="Name ... "
          onChange={(e) => setName(e.target.value)}
        />
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          id="username"
          placeholder="Username.."
        />
        <button onClick={dispatch(addUser({ name, userName, id: nanoid() }))}>
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h1>{user.content}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
