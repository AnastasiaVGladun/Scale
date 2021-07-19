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
    <>
      <h1>MY ACHIEVEMENTS</h1>

      {achievements && achievements.length > 0 &&
      achievements.map(achievement => {
          return (
          <div>
            <div key = {achievement.id}><img src={achievement.badge_image}></img></div>
            <div key = {achievement.id}>{achievement.name}</div>
            <div key = {achievement.id}>{achievement.description}</div>
          </div>)   
      })
    }
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    achievements: globalState.achievements,
  }
}
export default connect(mapStateToProps)(Achievements)
