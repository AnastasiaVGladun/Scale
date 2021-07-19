import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'
import Catch from './Catch'


function Diary (props){

return (
    <div className='diary'>
        <h1>My Fishing Diary</h1>
        {props.diary.map(entry => {
            console.log(entry)
            return (
                <li className='diaryList'>
                <h2>{entry.time}</h2>
                <h4>Location: {entry.location}</h4>
                <div className="myCatch">
                    <h5>Cought {entry.method}</h5>
                    <h5>Fish type: {entry.name}</h5>
                    <h5>Quantity: {entry.quantity}</h5> 
                    <img className='fishPhoto' src={`/images/Fishing people/${entry.photo}`} ></img>
                </div>
                </li>
            )
        })}
       <p> Add new catch </p>
       <Catch/>
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