import React from 'react'
import { useState } from 'react'
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { userAdded } from "./userSlice";


const AddUser = () => {
    
    const dispatch = useDispatch()
  
    const [userdetails, setUserdetails] = useState('')
  
    const onUserChanged = e => setUserdetails(e.target.value)
    
  
  const onSaveUserClicked = () => {
      if (userdetails) {
        dispatch(
        userAdded({
            id: nanoid(),
            userdetails
          })
        );
         setUserdetails(""); 
      }
    };

  return (
    <div>
      <section>
        <form className="add">
          <input
            className="add-user"
            type="text"
            id="user"
            name="user"
            value={userdetails}
            onChange={onUserChanged}
          />
          <button  className='Addbutton'     type="button" onClick={onSaveUserClicked}>
            ADD
          </button>
        </form>
      </section>
    </div>
  );
}

export default AddUser
