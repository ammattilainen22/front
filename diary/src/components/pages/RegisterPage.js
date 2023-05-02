import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const registerPage = () => {


    const handleSignin = async (event) => {
        event.preventDefault()
    /*
        const [newUsername, setnewUsername] = useState('')
        const [newPassword, setnewPassword] = useState('')

        try {

        } catch (exception) {
        }
    */
}};

export default registerPage

/*
    return (
        <div className="text-center m-5-auto">
            <h2>Create your personal account</h2>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input onChange={({ target }) => setnewUsername(target.value)}
                     type="text" 
                     name="username" required 
                     value={newUsername}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input onChange={({ target }) => setnewPassword(target.value)}
                    type="password"
                    name="password" required
                    value={newPassword}/>
                </p>
                <p>
                    <button onClick={handleSignin} id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        )
        */