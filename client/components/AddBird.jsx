import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createBird_formListing } from '../actions/bird_form'

const AddBird = (props) => {
  const {dispatch} = props
  
  const [formData, setFormData] = useState({title: '', date: 21022021 , name: '', description: ''})

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
    dispatch(createBird_formListing(formData))
    setFormData({title: '', date: 21022021 , name: '', description: ''})
    props.history.push('/foundbird')
  }

  return (
    <div classNmae="add-bird-container">
  <form className="add-bird-form" onSubmit= {(e) => submitHandler(e)} autoComplete="off">
        {/* Title */}
        <div className="field">
            <label className="label">Title</label>
              <div className="control">
                <input name="title" type="text" id="title" value={formData.title} onChange={(e) => changeHandler(e)}/>
              </div>
            </div>

            {/* Date */}
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input name="date" type="date" id="date" value={formData.date} onChange={(e) => changeHandler(e)}  className="input" />
              </div>
            </div>

            {/* Name */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input name="name" type="text" id="name" value={formData.name} onChange={(e) => changeHandler(e)} className="input" placeholder="Name"/>
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
    fish_form: globalState.fish_form
  }
}

export default connect(mapStateToProps)(AddBird) 