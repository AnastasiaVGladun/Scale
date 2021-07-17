import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'


function Diary (props){

   
    console.log(props.diary)

return (
    <div className='diary'>
        <p>Your fish</p>
        {props.diary.map(entry => {
            //do a thing
            return (
                <li>
                <p>Fish type: {entry.name}</p>
                <p>Location: {entry.location}</p>
               <p>Quantity: {entry.quantity}</p> 
                <img className='fishImg' src={`/images/Fishing people/${entry.photo}`} ></img>
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