import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createMarketplaceListing } from '../actions/marketplace'

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
    dispatch(createMarketplaceListing(formData))
    setFormData({date: 21022021, name: '', email: '', phone: '', description: ''})
    props.history.push("/marketplace")
  }

  return (
    <div className="add-listing-container">
      <h1>Add a Listing</h1>
  <form className="add-listing-form" onSubmit= {(e) => submitHandler(e)} autoComplete="off">
        {/* Date */}
        <div className="field">
            <label className="label">Date</label>
              <div className="control">
                <input name="date" type="date" id="date" value={formData.date} onChange={(e) => changeHandler(e)}/>
              </div>
            </div>

            {/* Name */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input name="name" type="text" id="name" value={formData.name} onChange={(e) => changeHandler(e)}  className="input" placeholder="Name"/>
              </div>
            </div>

            {/* Email */}
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input name="email" type="text" id="email" value={formData.email} onChange={(e) => changeHandler(e)} className="input" placeholder="Email"/>
              </div>
            </div>

            {/* Phone */}
            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input name="phone" type="text" id="phone" value={formData.phone} onChange={(e) => changeHandler(e)} className="input" placeholder="Phone"/>
              </div>
            </div>

            {/* Description */}
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input name="description" type="text" id="description" value={formData.description} onChange={(e) => changeHandler(e)} className="input" placeholder="Description"/>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="control">
              <button className="buttonItem">Submit</button>
            </div>
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