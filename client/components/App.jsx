import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDiary, createCatch } from '../actions/diary'
import { getAchievements } from '../actions/achievements'

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
import Achievements from './Achievements'
import Birdinfo from './Birdinfo'
import Poacher from './Poacher'
import Marketplace from './Marketplace'
import AddListing from './AddListing'
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
    <div className='mainWrap'>
    <Router>
      <Route path="/" component={Nav} />

      <div className="display">
        {!auth.isAuthenticated &&
          <Route exact path="/" component={Login} />
        }
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path='/fish' component={FishInfo} />
        <Route path="/bird" component={Birdinfo} />
        <Route path='/rules' component={RulesInfo} />
        <Route path="/stats" component={Statistic} />
        
        {auth.isAuthenticated && <Route path='/home' component={UserHome} />}
        {auth.isAuthenticated && <Route path="/diary" component={Diary} />}
        {auth.isAuthenticated && <Route path="/achievements" component={Achievements} />}  
        {auth.isAuthenticated && <Route path="/poacher" component={Poacher} />}  
        {auth.isAuthenticated && <Route path="/marketplace" component={Marketplace} />}  
        {auth.isAuthenticated && <Route path="/addlisting" component={AddListing} />}  
        {auth.isAuthenticated && <Route path="/bird" component={Birdinfo} />}     

        <Route path='/' component={Footer}/> 
        </div>
    </Router>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(App)






        {/* <div className="vertical-list"> */}
          {/* <div className="vertical-list">
          <div className="vertical-list"> */}
            {/* <Link to='/' className="">
              <h1 className="title is-1">Scale</h1>
            </Link> */}
            
            
          {/* </div>
          </div> */}
        {/* </div> */}

        // <div className="display">
        // {!auth.isAuthenticated &&
        //   <Route exact path="/" component={Login} />
        // }
        // <Route exact path="/" component={Home} />
        // <Route path="/login" component={Login} />
        // <Route path="/register" component={Register} />
        // <Route path='/fish' component={FishInfo} />
        // <Route path='/rules' component={RulesInfo} />
        // <Route path="/stats" component={Statistic} />
        
        // {auth.isAuthenticated && 
        //   <Route path='/user' component={UserHome} />
        //   <Route path="/diary" component={Diary} />
        //   <Route path="/achievements" component={Achievements} />
        // } 
        // </div>
        {/* <Route path='/' component={Footer}/>  */}
        // </Router>