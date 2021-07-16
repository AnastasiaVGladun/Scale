import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getFish } from '../actions/fish'

function FishInfo (props) {
    const {fish, dispatch} = props
    console.log(fish)
 
    useEffect(() => {
        return dispatch(getFish())
    },[])
    
    
    return (    
            <div>
                <div>
                    <ul id="horizontal-list">
                        {fish.map(fishinfo => {
                            return <div className="fish-info" key={fishinfo.id}>
                                <li><p>Fish Name: {fishinfo.name}</p></li>
                                <li> <p>Image: {fishinfo.image} </p></li>
                                <li> <p>Description: {fishinfo.description}</p></li>
                            </div>
                        })}
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
  export default connect(mapStateToProps)(FishInfo)


