import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDiary, createCatch } from '../actions/diary'
import { getAchievements } from '../actions/achievements'

import Home from './home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Catch from './Catch'


import { checkAuth } from '../actions/auth'
import Statistic from './Statistic'
import Diary from './Diary'
import FishInfo from './FishInfo'
import RulesInfo from './RulesInfo'
import UserHome from './UserHome'
import Achievements from './Achievements'
import Footer from './Footer'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() =>{
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
    dispatch(getDiary())
    // dispatch(getAchievements())
}, [])

  return (
    <Router>

        <Catch/>
      <div className="container has-text-centered">

      

        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">Scale</h1>
            </Link>
            <Route path="/" component={Nav} />
            <Route path="/stats" component={Statistic} />
          </div>
          </div>
          </div>

        <div className='      '>
        {!auth.isAuthenticated &&
          <Route exact path="/" component={Login} />
        }
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </div>

        {auth.isAuthenticated &&
         <>
          <Route path='/user' component={UserHome} />
          <Route path="/diary" component={Diary} />
          {/* <Route path="/user-home" component={UserHome} /> */}
          <Route path="/achievements" component={Achievements} />
       
          </>
        } 
        <Route path='/' component={Footer}/> 
        {/* </div>
        </div> */}

    </Router>
  )
}

const mapStateToProps = (globalState) => {
  return {

    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)
