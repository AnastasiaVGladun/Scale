import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createBoatListing } from '../actions/boat'
import { Link } from 'react-router-dom'

const AddBoat = (props) => {
  const {dispatch} = props
  const [formData, setFormData] = useState({ 
    boat_name: '',
    boat_licence: '',
    boat_licence_expiry: '',
    Fish_licence: '',
    Fish_licence_expiry: '',
    Boat_WOF_licence: '',
    Boat_WOF_licence_expiry: '',})

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
    dispatch(createBoatListing(formData))
    setFormData({boat_name: '',
    boat_licence: '',
    boat_licence_expiry: '',
    Fish_licence: '',
    Fish_licence_expiry: '',
    Boat_WOF_licence: '',
    Boat_WOF_licence_expiry: ''})

  }


  return (
    <div className="form-container">
      <form className="form" onSubmit= {(e) => submitHandler(e)}>
        <h1>Add Your Details</h1>
        <div className="field"></div>
          <label htmlFor="boat_name">Boat Name</label>
          <div className="control">
          <input name="boat_name" type="text" id="boat_name" value={formData.boat_name} onChange={(e) => changeHandler(e)}/>
          </div> 
          
          <label htmlFor="boat_licence">Boat Licence Number
            <input name="boat_licence" type="text" id="boat_licence" value={formData.boat_licence} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="boat_licence_expiry">Boat Licence Expiry Date
            <input name="boat_licence_expiry" type="text" id="boat_licence_expiry" value={formData.boat_licence_expiry} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="Fish_licence">Fish Licence Number
            <input name="Fish_licence" type="text" id="Fish_licence" value={formData.Fish_licence} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="Fish_licence_expiry">Fish Licence Expiry Date
            <input name="Fish_licence_expiry" type="text" id="Fish_licence_expiry" value={formData.Fish_licence_expiry} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="Boat_WOF_licence">Boat WOF Licence Number
            <input name="Boat_WOF_licence" type="text" id="Boat_WOF_licence" value={formData.Boat_WOF_licence} onChange={(e) => changeHandler(e)}/>
          </label>
          <label htmlFor="Boat_WOF_licence_expiry">Boat WOF Licence Expiry Date
            <input name="Boat_WOF_licence_expiry" type="text" id="Boat_WOF_licence_expiry" value={formData.Boat_WOF_licence_expiry} onChange={(e) => changeHandler(e)}/>
          </label>
         <button>Submit</button> 
      </form>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    boat: globalState.boat
  }
}

export default connect(mapStateToProps)(AddBoat) 