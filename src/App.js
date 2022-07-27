import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './Dashboard'

import React from 'react'
import PrivateRoutes from './PrivateRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Dashboard />} exact />
        </Route>
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  )
}
export default App
