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
            <div className='wrapper'>
             <h1 className= "headerStyle">Fishing Species in Aotearoa</h1>
                <div className="Fish-info-container">
                        {fish.map(fishinfo => {
                            return <div className="fish-info" key={fishinfo.id}>
                                <h2> {fishinfo.name}</h2>
                                <p><img className= 'fish-image' src={`/images/Fish/${fishinfo.image}@2x.png`}/></p>
                                <p>{fishinfo.description}</p>
                            </div>
                        })}
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


