import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createPoacher, getPoacher } from '../actions/poacher'

const Poacher = (props) => {
  return (
    <div className="poacher-contain">
        <h1 className="poacher-h1">Report a Poacher</h1>
        <form className="poacher-form">
          <label htmlFor="name">Name
            <input name="name" type="text" id="name"/>
          </label>
          <label htmlFor="email">Email
            <input name="email" type="text" id="email"/>
          </label>
          <label htmlFor="phone">Phone
            <input name="phone" type="text" id="phone"/>
          </label>
          <label htmlFor="description">Description
            <input name="description" type="text" id="description"/>
          </label>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default connect()(Poacher)