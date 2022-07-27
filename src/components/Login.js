import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { login } from '../feature/userSlice'
import { user } from '../user'
import { useNavigate } from 'react-router-dom'
function validateLogin(username, password) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].username === username && user[i].password === password) {
      return true
    }
  }
  return false
}

function Login() {
  const history = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = validateLogin(username, password)
    if (res === true) {
      dispatch(login())
      // history('/dashboard')
    } else {
      alert('Wrong username and password')
    }
  }
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 p-5">
          <div className="container p-3 shadow-lg mt-5">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-danger">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}

export default Login
