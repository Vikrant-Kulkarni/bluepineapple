
import React, { useState } from 'react';
import axios from 'axios';
import './Adduser.css'
import { useHistory } from 'react-router-dom';

function AddUser() {
  let history = useHistory()
  const [user, setUser] = useState({ id: '', FirstName: '', LastName: '', email: '' });
  const {id,  FirstName, LastName, email } = user


  const handleChange = event => {

    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    await axios.post(`http://localhost:5001/addusers`, user)
    history.push("/")
  }

  return (

    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <label id='AddUserDataTable'>
          <h5>Add a Employee data :</h5><br />

          <input type="text" name="id" value={id} placeholder="Enter Employee ID here" onChange={event => handleChange(event)}></input><br />
            
          <input type="text" name="FirstName" value={FirstName} placeholder="Enter Employee FirstName here" onChange={event => handleChange(event)}></input><br />

          <input type="text" name="LastName" value={LastName} placeholder="Enter  Employee LastName here" onChange={event => handleChange(event)}></input><br />

          <input type="text" name="email" value={email} placeholder="Enter Email-ID here" onChange={event => handleChange(event)}></input><br />

          <button type="submit">Add</button>
        </label>

      </form>
    </div>
  )
}

export default AddUser



