import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'
import Catch from './Catch'
import { Link} from 'react-router-dom'


function Diary (props){

return (
    <div className='diaryWrap'>
        <h1>My Fishing Diary</h1>
        <Link to='/addCatch'><button className='buttonItem'type="button">Add a New Catch</button></Link>

        {props.diary.map(entry => {
            // console.log(entry)
            return (
                <li className='diaryList'>
                <h2>{entry.time}</h2>
                <h4>{entry.location}</h4>
                <div className="myCatch">
                    <h5>{entry.method}</h5>
                    <h5>{entry.name}<br />
                    species</h5>
                    <img src={`/images/Fish/${entry.image}@2x.png`} ></img>
                    <h5>{entry.quantity}</h5> 
                    <img className='fishPhoto' src={`/images/Fishing people/${entry.photo}`} ></img>
                </div>
                </li>
            )
        })}
    </div>
)
}


const mapStateToProps = (globalState) => {
    return {
        diary: globalState.diary,
        auth: globalState.auth
    }
  }
  
  export default connect(mapStateToProps)(Diary)