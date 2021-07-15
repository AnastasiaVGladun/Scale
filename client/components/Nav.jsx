import React, { useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/auth'

function Nav () {
  


  return (

    <div id="nav" >

      <div>
        <img id="logo-img" src="/images/Logo/logo_1.png" /> 
      </div>

      
      <div>
        <ul id="vertical-list">
                    <li> <p>LOG MY CATCH</p> </li>
                    <li> <p>DIARY</p> </li>
                    <li> <p>ACHIVEMENT</p> </li>
                    <li> <p>REMINDERS</p> </li>
                    <li> <p>FISH INFO</p> </li>
                    <li> <p>STATISTICS</p> </li>
                    <li> <p>RULES</p> </li>
                    <li> <p>LOG OUT</p> </li>
                    </ul>
        </div>  


      




    </div>




  )
}

const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish
  }
}

export default connect(mapStateToProps)(Nav)
