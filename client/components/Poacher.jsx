import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createPoacher } from '../actions/poacher'

const Poacher = (props) => {
  const {dispatch} = props
  const [formData, setFormData] = useState({name: '', email: '', phone: '', description: ''})

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
    dispatch(createPoacher(formData))
    setFormData({name: '', email: '', phone: '', description: ''})
  }
  return (
    <div>
      <form className="poacher-form" onSubmit= {(e) => submitHandler(e)}>
        <h1>Pot a Poacher</h1>
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
    poacher: globalState.poacher
  }
}

export default connect(mapStateToProps)(Poacher) 