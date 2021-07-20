import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getObsListings } from '../actions/obs'
import {Link} from 'react-router-dom'

const Obs = (props) => {
  const {dispatch, obs} = props

  useEffect(() => {
    dispatch(getObsListings())
  }, [])

  return (
    <div className="obs-body">
      <h1 className="obs-heading">Obs</h1>
      <div className="listing-container">
      <div className="add-listing"><Link to='/addObs'><button>Add Observation</button></Link></div>
        {obs.map((listing) => {
          return (
          <div className="listing" key={listing.id}>
            <h4>{listing.title}</h4>
            <p>{listing.date}</p>
            <p>by{listing.name}</p>
            <img src={listing.image}></img>
            <p>{listing.description}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    obs: globalState.obs
  }
}

export default connect(mapStateToProps)(Obs) 
