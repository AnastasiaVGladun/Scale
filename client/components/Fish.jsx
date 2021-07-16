import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Snapper (props) {
 
    const { name, image, description} = props

    return (    
            <div>
                <div>
                    <ul id="horizontal-list">
                    <li> <p>Name</p> {name}</li>
                    <li> <p>Image</p> {image} </li>
                    <li> <p>Description</p>{description}</li>
                    </ul>
                </div>
            </div>
    )
}
const mapStateToProps = (globalState) => {
    return {
      fish: globalState.fish
    }
  }
  export default connect(mapStateToProps)(Snapper)


