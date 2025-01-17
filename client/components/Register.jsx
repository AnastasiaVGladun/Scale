import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import {loginError, registerUserRequest} from '../actions/auth'

function Register (props) {
  const { auth, dispatch } = props
  
  const [formData, setFormData] = useState({
    username: '',
    contact_details: '',
    email_address: '',
    password: '', 
    confirm_password: ''
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    let { password, confirm_password } = formData

    if (confirm_password != password){
      dispatch(loginError("Passwords don't match"))
    } else {
      const confirmSuccess = () => { props.history.push('/') }
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <h1 className= "headerStyle">Register</h1>
      <hr />
      {auth.errorMessage && <span >{auth.errorMessage}</span>}
      <label className="column is-6 is-offset-one-quarter label is-large has-text-centered">Username
        <input required className="input is-large has-text-centered is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" onChange={handleChange} value={formData.username}/>
      </label>
      <div className="columns">
        <label className="column is-6 label is-large has-text-centered">Contact Details
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Contact Details" type="text" name="contact_details" onChange={handleChange} value={formData.contact_details}/>
        </label>
        <label className="column is-6 label is-large has-text-centered">Email Address
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Email Adress" type="text" name="email_address" onChange={handleChange} value={formData.email_address}/>
        </label>
      </div>
      <br />
      <div className="columns">
        <label className="column is-6 label is-large has-text-centered">Password
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={handleChange} value={formData.password}/>
        </label>
        <label className="column is-6 label is-large has-text-centered">Confirm Password
          <input required className="input is-large has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password}/>
        </label>
      </div>
      <input className='buttonItem' value="Register" type="submit" />
    </form>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Register)
