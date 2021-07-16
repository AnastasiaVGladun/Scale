import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Rules from './rules'
import Snapper from './Fish'


import { checkAuth } from '../actions/auth'
import Statistic from './Statistic'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <Router>

      
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
