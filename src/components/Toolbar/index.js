import React from 'react'
import { Link } from 'react-router'


export default () => (
  <nav className="navbar" role="navigation">
    <Link to="/">Home</Link>
    <Link to="/second">Second</Link>
  </nav>
)
