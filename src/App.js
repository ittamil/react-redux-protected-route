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
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Header />
        <Route path="/" element={<Dashboard />} exact />
        <Footer />
        </Route>
        <Route path="/login" element={<Login />} exact />
      </Routes>
    </Router>
  )
}
export default App
