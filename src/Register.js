import React from 'react'
// import classes from './register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { request } from './fetchApi'
import { register } from './authSlice'
import { useDispatch } from 'react-redux'
import './Register.css'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()

        if (username === '' || email === '' || password === '') return

        try {
            const options = { 'Content-Type': 'application/json' }

            const data = await request('/auth/register', "POST", options, { username, email, password })
            dispatch(register(data))
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container2">
            <div className="wrapper2">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    <div className="cred2">
                        <p>Use credentials to login </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register