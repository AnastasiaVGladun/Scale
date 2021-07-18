import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBird } from '../actions/bird'

function BirdInfo (props) {
    const {bird, dispatch} = props
    console.log(bird)
 
    useEffect(() => {

        return dispatch(getBird())
    },[])
    return (    
        <div> 
            <div>
                <ul id="horizontal-list">
                    {bird.map(birdinfo => {
                        return <div className= "bird-info" key={birdinfo.id}>
                            <li><p> {birdinfo.name}</p></li>
                            <li>{birdinfo.description}</li>
                        </div>
                    })}
                </ul>
            </div>
        </div>
)
}
const mapStateToProps = (globalState) => {
return {
  bird: globalState.bird
}
}
export default connect(mapStateToProps)(BirdInfo)