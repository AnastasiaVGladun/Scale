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


          <div className="field">
            <label className="label">Boat Name</label>
            <div className="control">
              <input name="boat_name" type="text" id="boat_name" value={formData.boat_name} onChange={(e) => changeHandler(e)} className="input" placeholder='Boat Name'/>
            </div> 
          </div>

          <div className="field">
            <label className="label">Boat Licence Number</label>
            <div className="control">
              <input name="boat_licence" type="text" id="boat_licence" value={formData.boat_licence} onChange={(e) => changeHandler(e)} className="input" placeholder='Boat licence'/>
            </div> 
          </div> 

          <div className="field">
            <label className="label">Fish Licence Expiry</label>
            <div className="control">
            <input name="boat_licence_expiry" type="text" id="boat_licence_expiry" value={formData.boat_licence_expiry} onChange={(e) => changeHandler(e)} className="input" placeholder='Boat licence expiry'/>
            </div> 
          </div>


          <div className="field">
            <label className="label">Fish Licence</label>
            <div className="control">
            <input name="Fish_licence" type="text" id="Fish_licence" value={formData.Fish_licence} onChange={(e) => changeHandler(e)} className="input" placeholder='Fish licence'/>
            </div> 
          </div>

          <div className="field">
            <label className="label">Fish Licence Expiry</label>
            <div className="control">
            <input name="Fish_licence_expiry" type="text" id="Fish_licence_expiry" value={formData.Fish_licence_expiry} onChange={(e) => changeHandler(e)} className="input" placeholder='Fish licence Expiry'/>
            </div> 
          </div>

          <div className="field">
            <label className="label">Boat WOF Licence</label>
            <div className="control">
            <input name="Boat_WOF_licence" type="text" id="Boat_WOF_licence" value={formData.Boat_WOF_licence} onChange={(e) => changeHandler(e)} className="input" placeholder='Boat WOF Licence'/>
            </div> 
          </div>

          <div className="field">
            <label className="label">Boat WOF Licence Expiry Date</label>
            <div className="control">
            <input name="Boat_WOF_licence_expiry" type="text" id="Boat_WOF_licence_expiry" value={formData.Boat_WOF_licence_expiry} onChange={(e) => changeHandler(e)} className="input" placeholder='Boat WOF Licence Expiry Date'/>
            </div> 
          </div>
  
         <button className="buttonItem">Submit</button> 
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