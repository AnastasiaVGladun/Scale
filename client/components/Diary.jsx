import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'
import Catch from './Catch'


function Diary (props){

return (
    <div className='diary'>
        <p className='title'>My Fishing Diary</p>
        {props.diary.map(entry => {
            //do a thing
            return (
                <li className='diaryList'>
                <p>Fish type: {entry.name}</p>
                <p>Location: {entry.location}</p>
               <p>Quantity: {entry.quantity}</p> 
                <img className='fishPhoto' src={`/images/Fishing people/${entry.photo}`} ></img>
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