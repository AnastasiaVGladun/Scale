import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAchievements} from '../actions/achievements'

const Achievements = (props) => {
  const { achievements, dispatch } = props

  useEffect(() => {
    dispatch(getAchievements())
    // return console.log(achievements)
  }, [])


  return (
    <div className='achievementWrap'>
      <h1>MY ACHIEVEMENTS</h1>
<div className='achievementList'>
      {achievements && achievements.length > 0 &&
      achievements.map(achievement => {
          return (
          <div className='achievementListItem'>
            <div key = {achievement.id}><img src={achievement.badge_image}></img></div>
            <div key = {achievement.id}><h4>{achievement.name}</h4></div>
            <div key = {achievement.id}><h5>{achievement.description}</h5></div>
          </div>)   
      })
    }
    </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    achievements: globalState.achievements,
  }
}
export default connect(mapStateToProps)(Achievements)
