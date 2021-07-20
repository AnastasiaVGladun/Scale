import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'
import Catch from './Catch'
import { Link} from 'react-router-dom'


function Diary (props){

return (
    <div className='diary'>
        <h1>My Fishing Diary</h1>
        {props.diary.map(entry => {
            console.log(entry)
            return (
                <div className="diary-conatiner">
                    <div className="diary-card">
                    <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={`/images/Fishing people/${entry.photo}`} alt="fish catch image"/>
                    </figure>
                    </div>
                
                    <div className="card-content">
                    <div className="content">
                        <p>Location: {entry.location}</p>
                        <p>Cought {entry.method}</p>
                        <p>Fish type: {entry.name}</p>
                        <p>Quantity: {entry.quantity}</p> 
                        <p>Description: {entry.description}</p> 
                        <h2>{entry.time}</h2>
                    </div>
                    </div>
                </div>
                </div>
            )
        })}

        
        <Link to='/addCatch'><button type="button">New Catch</button></Link>
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


