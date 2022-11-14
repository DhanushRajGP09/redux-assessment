import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { deleteUser } from './userSlice';




const UserLists = () => {
const users = useSelector((state) => state.Users.value);  
const dispatch = useDispatch();
  
  const renderedUsers = users.map((user) => (
    <div className="user-data">
      <article className="users" key={user.id}>
        <p className="users-details">{user.userdetails}</p>
      </article>
      <button className="remove" onClick={()=>{
        dispatch(deleteUser({id: user.id}))
      }}>
        Remove
      </button>
    </div>
  ));

  return (
    <div>
      <div className="container">{renderedUsers}</div>
    </div>
  );
};

export default UserLists
