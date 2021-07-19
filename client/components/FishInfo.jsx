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
            <div className='infoWrap'>
             <h1 className= "headerStyle">Fishing Species in Aotearoa</h1>
             <h5>A visual reference for identifying saltwater (and freshwater) fish species that are located in New Zealand waters.</h5>
             <h5>Learn more about each fish species such as it's physical characteristics, typical locations in New Zealand and suitability for eating.</h5>
                <div>
                    <ul className="horizontal-list">
                        {fish.map(fishinfo => {
                            return <div className="fish-info" key={fishinfo.id}>
                                <li><p>{fishinfo.name}</p></li>
                                <li> <img className= 'fish-image' src={`/images/Fish/${fishinfo.image}@2x.png`}/></li>
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


