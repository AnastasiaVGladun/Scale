
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/auth'

function Nav (props) {
  const { auth, dispatch } = props

  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible((prevBurgerState) => {
      return !prevBurgerState
    })
  }

  const logout = () => {
    const confirmSuccess = () => props.history.push('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return <nav id="nav">
    <div>
        <img className="logo-img" src="/images/Logo/logo_1.png" /> 
      </div>
      <div className="container">
        <div >
          <span onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active' : ''}`} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
          <div className='myNav'>
            { !auth.isAuthenticated
              ? (
                <>
                  <Link onClick={toggleBurger}  to='/'>HOME</Link>
                  <Link onClick={toggleBurger} className="navbar-item is-large" to='/login'>LOGIN</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/register'>REGISTER</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/fish'>FISH INFO</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/bird'>BIRD INFO</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/rules'>RULES</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/stats'>STATISTICS</Link>
                  </>
                )
              : (
                <>
                  <Link onClick={toggleBurger} className="navbar-item is-large" to='/'>HOME</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/fish'>FISH INFO</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/bird'>BIRD INFO</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/rules'>RULES</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/stats'>STATISTICS</Link>
                  <Link onClick={toggleBurger} className="navbar-item is-large" to='/diary'>DIARY</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/user'>USERHOME</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/achievements'>ACHIEVEMENTS</Link>
                  <Link to='/' className="navbar-item is-large" onClick={() => logout()}>LOGOUT</Link>



                </>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  }

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Nav)
