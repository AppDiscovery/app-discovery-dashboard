import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => (
  <div>
    <p>-------------------------------------</p>
    This is NavigationBar
    <Link to="/login">Login</Link>
    <Link to="/deploy">Deploy</Link>
    <p>-------------------------------------</p>
  </div>
)

export default NavigationBar
