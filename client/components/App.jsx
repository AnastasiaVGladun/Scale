import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDiary, createCatch } from '../actions/diary'
import { getAchievements } from '../actions/achievements'
import Home from './home'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
<<<<<<< HEAD
||||||| 5b7be69
import Catch from './Catch'


=======



>>>>>>> 6e98314be31b1ba25c65bdb208207ebc485e14bd
import { checkAuth } from '../actions/auth'
import Statistic from './Statistic'
import Diary from './Diary'

import FishInfo from './FishInfo'
import BirdInfo from './BirdInfo'
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
      <div className="container has-text-centered">
        <div className="hero is-small is-primary">
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">Scale</h1>
            </Link>
            <Route path="/" component={Nav} />
            <Route exact path="/" component={Home} />
          </div>
          </div>
          </div>
        <div className='      '>
        {!auth.isAuthenticated &&
          <Route exact path="/" component={Login} />
        }
        
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
<<<<<<< HEAD
        <Route path='/fish' component={FishInfo} />
        <Route path='/rules' component={RulesInfo} />
        <Route path="/bird" component={BirdInfo} />
||||||| 5b7be69
        </div>
=======
        <Route path='/fish' component={FishInfo} />
        <Route path='/rules' component={RulesInfo} />
        <Route path="/stats" component={Statistic} />
        </div>
>>>>>>> 6e98314be31b1ba25c65bdb208207ebc485e14bd

        </div>
        {auth.isAuthenticated &&
         <>
          <Route path='/user' component={UserHome} />
          <Route path="/diary" component={Diary} />
          <Route path="/achievements" component={Achievements} />
          </>
<<<<<<< HEAD
        }
        <Route path='/' component={Footer}/>
        {/* </div>
        </div> */}
||||||| 5b7be69
        } 
        <Route path='/' component={Footer}/> 
        {/* </div>
        </div> */}

=======
        } 
        <Route path='/' component={Footer}/> 

>>>>>>> 6e98314be31b1ba25c65bdb208207ebc485e14bd
    </Router>
  )
}
const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}
export default connect(mapStateToProps)(App)