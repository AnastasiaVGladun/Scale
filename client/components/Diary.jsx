import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'

// import { getDiary, createCatch } from '../actions/diary'

function Diary (props){

    // const {name, photo, weight, location } = props.diary
    console.log(props.diary)

    // useEffect(() =>{
    //     props.dispatch(getDiary())
    // }, [])

return (
    <div className='diary'>
        <p>Your fish</p>
        {/* <p>{props.diary[0] && (
            props.diary[0].name
        )}</p>
        <p>{props.diary[0]?.name}</p> */}
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