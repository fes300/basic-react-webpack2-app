import React, { PropTypes } from 'react'
import Toolbar from '../../components/Toolbar'


const App = props => (
  <main className="viewport">
    <Toolbar />
    {props.children}
  </main>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
