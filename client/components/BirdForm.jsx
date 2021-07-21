import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createBird_formListing, getBird_formListings } from '../actions/bird_form'
import {Link} from 'react-router-dom'

const Bird_form = (props) => {
  const {dispatch, bird_form} = props
  console.log(props)

  useEffect(() => {
    dispatch(getBird_formListings())
  }, [])

  return (
    <div className="poacher-form">
      <h1 className="bird_form-heading">COMMUNITY BIRD WATCH</h1>
      <div className="listing-container">
      <div ><Link to='/addbird'><button className="buttonItem">Add your Bird</button></Link></div>
        {bird_form.map((listing) => {
          return (
          <div className="listing" key={listing.id}>
            <p>{listing.title}</p>
            <p>{listing.date}</p>
            <p>{listing.name}</p>
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
    bird_form: globalState.bird_form
  }
}

export default connect(mapStateToProps)(Bird_form) 