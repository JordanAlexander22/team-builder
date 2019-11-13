import React, {useState} from 'react';
import './App.css';


function App() {
  const [members, setMembers]= useState({
    name: "",
    email:"",
    role:"",
    listofPeople:[]
  });

  const FormChange = e => {
    setMembers({
      ...members,
      [e.target.member]: e.target.value
    });
  }
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <h1>Welcome to AE Skateshop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Members:
          <input
            type="text"
            name="member"
            placeholder="Enter Member Name "
            onChange={FormChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            onChange={FormChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            placeholder="Enter Role"
            onChange={FormChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
