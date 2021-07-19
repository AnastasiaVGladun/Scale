
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

  return <nav >
    <div>
        <img className="logo-img" src="/images/Logo/logo_1.png" /> 
        <h1 className='homeName'>Scale</h1>
      </div>
      <div >
        <div >
          <span onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active' : ''}`} data-target="navbarMenuHeroA">
          </span>
        </div>
        <div  className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
          <div className='myNav'>
            { !auth.isAuthenticated
              ? (
                <>
                  <Link onClick={toggleBurger}  to='/'>HOME</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/login'>LOGIN</Link>
                  <Link onClick={toggleBurger} className='navItem'  to='/register'>REGISTER</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/fish'>FISH INFO</Link>
                  <Link onClick={toggleBurger} className='navItem'to='/bird'>BIRD INFO</Link>
                  <Link onClick={toggleBurger} className='navItem'to='/rules'>RULES</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/stats'>STATISTICS</Link>
                  </>
                )
              : (
                <>
                  <Link onClick={toggleBurger} className='navItem' to='/'>HOME</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/fish'>FISH INFO</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/bird'>BIRD INFO</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/rules'>RULES</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/stats'>STATISTICS</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/diary'>DIARY</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/user'>USERHOME</Link>
                  <Link onClick={toggleBurger} className='navItem' to='/achievements'>ACHIEVEMENTS</Link>
                  <Link to='/' className='navItem' onClick={() => logout()}>LOGOUT</Link>



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
