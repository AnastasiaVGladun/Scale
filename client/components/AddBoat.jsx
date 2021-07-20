import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createBoatListing, getBoatListings } from '../actions/boat'
import {Link} from 'react-router-dom'

const Boat = (props) => {
  const {dispatch, boat} = props

  useEffect(() => {
    dispatch(getBoatListings())
  }, [])

  return (
    <div className="boat-body">
      <h1 className="boat-heading">Boat</h1>
      <div className="listing-container">
      <div className="add-listing"><Link to='/addlisting'><button>+ Add listing</button></Link></div>
        {boat.map((listing) => {
          return (
          <div className="listing" key={listing.id}>
            <p>{listing.date}</p>
            <p>{listing.name}</p>
            <p>{listing.phone}</p>
            <p>{listing.description}</p>
          </div>)
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    boat: globalState.boat
  }
}

export default connect(mapStateToProps)(Boat) 