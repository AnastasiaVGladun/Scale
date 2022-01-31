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
import Poacher from './Poacher'
import Marketplace from './Marketplace'
import AddListing from './AddListing'
import Footer from './Footer'
import Catch from './Catch'
import BirdInfo from './BirdInfo'
import SearchBox from './Search'
import AddBoat from './AddBoat'
import Obs from './Obs'
import AddObs from './AddObs'
import BirdForm from './BirdForm'
import AddBird from './AddBird'

function App (props) {
  const { auth, dispatch } = props

  useEffect(() =>{
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
    dispatch(getDiary())
    // dispatch(getAchievements())
}, [])

  return ( <div className='mainWrap'>
            <div className="darkBlue"> 
            <img className='iconFish' src="/images/Icon/Fish4.png" alt="untangle bird pic"/>
            <img className='iconFish2' src="/images/Icon/Fish2.png" alt="untangle bird pic"/>
            <img className='iconFish' src="/images/Icon/Fish3.png" alt="untangle bird pic"/>
            <img className='iconFish2' src="/images/Icon/Fish4.png" alt="untangle bird pic"/>
            <img className='iconFish' src="/images/Icon/Fish2.png" alt="untangle bird pic"/>
            <img className='iconFish2' src="/images/Icon/Fish3.png" alt="untangle bird pic"/>
            <img className='iconFish' src="/images/Icon/Fish4.png" alt="untangle bird pic"/>
            <img className='iconFish2' src="/images/Icon/Fish2.png" alt="untangle bird pic"/>
            <img className='iconFish' src="/images/Icon/Fish3.png" alt="untangle bird pic"/>
            <img className='iconFish2' src="/images/Icon/Fish4.png" alt="untangle bird pic"/>
            <img className='iconFish' src="/images/Icon/Fish2.png" alt="untangle bird pic"/>
            <img className='iconFish2' src="/images/Icon/Fish3.png" alt="untangle bird pic"/>
            
            </div>
              <Router>
              <div className="vertical-list">
                <Link to='/' className="">
                  {/* <h1 className="title is-1">Scale</h1> */}
                </Link>
                <Route path="/" component={Nav} />
            
          </div>
          <Route exact path="/" component={Home} />
        <div>
        {!auth.isAuthenticated &&
        <>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </>
        }
        
        <Route path='/fish' component={SearchBox} />
        <Route path='/rules' component={RulesInfo} />
        <Route path="/stats" component={Statistic} />
        <Route path="/bird" component={BirdInfo} />

        </div>

        {auth.isAuthenticated &&
         <>
          <Route path='/user' component={UserHome} />
          <Route path="/diary" component={Diary} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/poacher" component={Poacher} />
          <Route path="/marketplace" component={Marketplace} />
          <Route path="/addListing" component={AddListing} />
          <Route path="/addBoat" component={AddBoat} />
          <Route path="/obs" component={Obs} />
          <Route path="/addObs" component={AddObs} />
          <Route path="/addCatch" component={Catch} />
       
          <Route path="/foundbird" component={BirdForm} />
          <Route path="/addbird" component={AddBird} />
          </>

          
        } 
        {/* <Route path='/' component={Footer}/>  */}
      
    
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
