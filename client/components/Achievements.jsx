import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getAchievements } from '../actions/achievements'

const Achievements = (props) => {
  const { achievements, diary, dispatch } = props
  console.log(diary)

  useEffect(() => {
    dispatch(getAchievements())
    return console.log(achievements)
  }, [])


  return (
    <>
      <h1>MY ACHIEVEMENTS</h1>

      {achievements && achievements.length > 0 &&
        <div>{achievements.map(achievement => {
          if (achievement.description === 'Logged your first catch!') {

            if (diary.length > 0) {
              return <div>
                <div><img src={achievement.badge_image}></img></div>
                <div>{achievement.name}</div>
                <div>{achievement.description}</div>
                </div>
            }
        
          } else if (achievement.description === 'Nice! Caught more than three fish.') {

            let quanArr = diary.map(entry => {
              return entry.quantity
            });

            let totalQuan = quanArr.reduce((a, b) => {
              return a + b;
            }, 0)

            if (totalQuan > 3) {
              return <div>
              <div><img src={achievement.badge_image}></img></div>
              <div>{achievement.name}</div>
              <div>{achievement.description}</div>
              </div>
            }
          } else if (achievement.description === 'Caught three different fish species!'){
            let fishType = diary.map(entry => {
              return entry.fish_id
            })

            let uniqueSpecies = [...new Set(fishType)]

            if(uniqueSpecies.length>3){
              return <div>
              <div><img src={achievement.badge_image}></img></div>
              <div>{achievement.name}</div>
              <div>{achievement.description}</div>
              </div>
            }
          }


        })}</div>
      }


    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    achievements: globalState.achievements,
    diary: globalState.diary
  }
}
export default connect(mapStateToProps)(Achievements)

