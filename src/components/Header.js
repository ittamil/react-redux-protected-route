import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../feature/userSlice';
 

function Header() {
  const dispatch = useDispatch()

  const auth = useSelector((state) => state.user.isLoggedIn)
  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Redux Auth
          </a>
          <div className="mx-auto collapse navbar-collapse text-white">
            <div className="navbar-nav">
              {!auth ? (
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              ) : (
                <>
                <Link className="nav-link text-white" to="/">
                Home
              </Link>
                <a className="nav-link text-white"  onClick={logoutHandler}>
                  Logout
                </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
