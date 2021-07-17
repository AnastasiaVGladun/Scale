import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDiary, createCatch } from '../actions/diary'

import Home from './home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'


import { checkAuth } from '../actions/auth'
import Statistic from './Statistic'
import Diary from './Diary'
import FishInfo from './FishInfo'
import RulesInfo from './RulesInfo'
import UserHome from './UserHome'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() =>{
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
    dispatch(getDiary())
}, [])

  return (
    <Router>
      <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">Scale</h1>
          </Link>
          <Route path="/" component={Nav} />
          <Route path="/stats" component={Statistic} />
          <Route path="/fish" component={FishInfo} />
          <Route path="/rules" component={RulesInfo} />

        </div>
      </div>

        <div className='      '>
          {!auth.isAuthenticated &&
            <Route exact path="/" component={Login} />
          }

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route path="/diary" component={Diary} /> */}
          <Route path="/user-home" component={UserHome} />
          
        </div>
        {auth.isAuthenticated &&
         <>
         <Route path="/diary" component={Diary} />
         <Route path="/stats" component={Statistic} />
       
          </>
        } 
        </div>
    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {

    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
