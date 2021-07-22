import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'
import Catch from './Catch'
import { Link} from 'react-router-dom'


function Diary (props){

return (
    <div className='diary'>
        <h1 className="title is-1">My Fishing Diary</h1>
        <Link to='/addCatch'><button className="button is-light">New Catch</button></Link>
        <div className="diary-container">
        {props.diary.map(entry => {
            console.log(entry)
            return (
                <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={`/images/Fishing-people/${entry.photo}`} alt="Placeholder image"/>
                    </figure>
                </div>

                <div className="card-content">
                    <div className="content">
                        <p><strong>Location: </strong> {entry.location}</p>
                        <p><strong>Cought: </strong> {entry.method}</p>
                        <p><strong>Fish type: </strong> {entry.name}</p>
                        <p><strong>Quantity: </strong>{entry.quantity}</p> 
                        <time datetime="2016-1-1">{entry.time}</time>
                    </div>
                </div>
                </div>
            )
        })} 
        </div>
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


