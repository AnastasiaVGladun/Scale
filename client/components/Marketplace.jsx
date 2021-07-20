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
          // <div className="listing" key={listing.id}>
          //   <p>{listing.date}</p>
          //   <p>{listing.name}</p>
          //   <p>{listing.phone}</p>
          //   <p>{listing.description}</p>
          // </div>

            <div className="card" key={listing.id}>
            <div className="card-content">
              <p>{listing.date}</p>
              <p>{listing.name}</p>
              <p>{listing.phone}</p>
              <p>{listing.description}</p>
            </div>
            {/* Card footer */}
            <div className="card-footer" >
              <p className="card-footer-item">
                <span>
                  View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  Share on <a href="#">Facebook</a>
                </span>
              </p>
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
    marketplace: globalState.marketplace
  }
}

export default connect(mapStateToProps)(Marketplace) 