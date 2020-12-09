
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './EditUser.css'
import { useHistory, useParams } from 'react-router-dom';

function EditUser() {
    let history = useHistory()
    const { id } = useParams()


    const [user, setUser] = useState({ ID: '', FirstName: '', LastName: '', email: '' });
    const { ID, FirstName, LastName, email } = user


    const handleChange = event => {

        setUser({ ...user, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        loadUser()
    },[])

    const handleSubmit = async event => {
        event.preventDefault()
        await axios.put(`http://localhost:5001/update/${id}`, user)
        history.push("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5001/${id}`)
        console.log(result.data.data[0])
        setUser(result.data.data[0])
        console.log(result.data)
        
    }

    
    return (

        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label id='AddUserDataTable'>
                    <h5>Edit  Employee data :</h5><br />

                    <input type="text" name="ID" value={ID} onChange={event => handleChange(event)}></input><br />

                    <input type="text" name="FirstName" value={FirstName} onChange={event => handleChange(event)}></input><br />

                    <input type="text" name="LastName" value={LastName} onChange={event => handleChange(event)}></input><br />

                    <input type="text" name="email" value={email} onChange={event => handleChange(event)}></input><br />

                    <button className='btn btn-warning' type="submit">Update User Data</button>
                </label>

            </form>
        </div>
    )
}

export default EditUser





