import './App.css'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import PrivateRoutes from './PrivateRoute'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" element={<Dashboard />} exact />
        </Route>
        <Route path="/login" element={<Login />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
