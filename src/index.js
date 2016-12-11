import { render } from 'react-dom'
import React from 'react'
import { Router, browserHistory } from 'react-router'
import rootRoute from './routing'


render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root'),
)
