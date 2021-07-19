import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createMarketplaceLising, getMarketPlaceListings } from '../actions/marketplace'
import {Link} from 'react-router-dom'

const Marketplace = (props) => {
  const {dispatch, marketplace} = props

  useEffect(() => {
    dispatch(getMarketPlaceListings())
  }, [])

  return (
    <div className="marketplace-body">
      <h1 className="marketplace-heading">Marketplace</h1>
      <div className="listing-container">
      <div className="add-listing"><Link to='/addlisting'><button>+ Add listing</button></Link></div>
        {marketplace.map((listing) => {
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
    marketplace: globalState.marketplace
  }
}

export default connect(mapStateToProps)(Marketplace) 