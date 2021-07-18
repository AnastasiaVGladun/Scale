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
                                <li><p> {fishinfo.name}</p></li>
                                <li> <p><img className= 'fish-image' src={`/images/Fish/${fishinfo.image}@2x.png`}/>
</p></li>
                                <li>{fishinfo.description}</li>
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


