import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getMarketPlaceListings, createMarketplaceLising } from '../actions/marketplace'

const AddListing = (props) => {
  const {dispatch} = props
  const [formData, setFormData] = useState({date: 21022021 ,name: '', email: '', phone: '', description: ''})

  // Onchange Handler 
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // Submit Handler 
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(createMarketplaceLising(formData))
    setFormData({date: 21022021, name: '', email: '', phone: '', description: ''})
  }

  return (
    <div>
      <form className="poacher-form" onSubmit= {(e) => submitHandler(e)}>
        <h1>Add Listing</h1>
          <label htmlFor="date">Date
            <input name="date" type="text" id="date" value={formData.date} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="name">Name
            <input name="name" type="text" id="name" value={formData.name} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="email">Email
            <input name="email" type="text" id="email" value={formData.email} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="phone">Phone
            <input name="phone" type="text" id="phone" value={formData.phone} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="description">Description
            <input name="description" type="text" id="description" value={formData.description} onChange={(e) => changeHandler(e)}/>
          </label>
          <button>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    marketplace: globalState.marketplace
  }
}

export default connect(mapStateToProps)(AddListing) 