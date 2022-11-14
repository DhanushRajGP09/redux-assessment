import React from 'react';
import './App.css';
import AddUser from './features/Users/AddUser';
import UserLists from './features/Users/UserLists';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UserLists />
    </div>
  );
}

export default App;
