import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAchievements } from '../actions/achievements'

function Achievements (props) {
    const {achievements, dispatch} = props
    console.log(achievements)

 
    useEffect(() => {
        return dispatch(getAchievements())
    },[])
    
    
    return (   <h1>MY ACHIEVEMENTS</h1> 
            
    )
}
const mapStateToProps = (globalState) => {
    return {
      achievements: globalState.achievements
    }
  }
  export default connect(mapStateToProps)(Achievements)