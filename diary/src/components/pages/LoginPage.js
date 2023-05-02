import React from 'react'
import { useState } from 'react'
import loginService from '../services/loginService.js'
import { Link } from 'react-router-dom'
import '../../App.css'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
    
        try {
            console.log("try")
            console.log(username, password)
            const user = await loginService.login2({
                username, password,
            })
            console.log("try2")
            loginService.setToken(user.token)
            console.log("try3")
            setUsername('')
            setPassword('')
            return (
            <div>
                <Link to="/home"></Link>
            </div>
            )
        } catch (exception) {
            console.log("käyttäjänimi tai salasana on väärä")
        }}

    return (
        <div className="text-center m-5-auto">
            <form onSubmit={handleLogin}>
                <p>
                    <label>Username</label><br/>
                    <input onChange={({ target }) => setUsername(target.value)}
                     type="text" 
                     name="username" required 
                     value={username}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input onChange={({ target }) => setPassword(target.value)}
                    type="password"
                    name="password" required
                    value={password}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
        </div>
    )
}

export default LoginPage

/*
<footer>
<p><Link to="/">Back to Homepage</Link>.</p>
</footer>
*/