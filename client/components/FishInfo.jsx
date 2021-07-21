import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getFish } from '../actions/fish'
import SearchBox from './Search'


function FishInfo (props) {
    const {fish, dispatch} = props
    
    useEffect(() => {
        return dispatch(getFish())
    },[])
    return (    
        
            <div className='infoWrap'>
                <div>
                    <ul className="horizontal-list">
                        {fish.map(fishinfo => {
                            return <div className="fish-info" key={fishinfo.id}>
                                <li><h4>{fishinfo.name}</h4></li>
                                <li> <img className= 'fish-image' src={`/images/Fish/${fishinfo.image}@2x.png`}/></li>
                                <li><p>{fishinfo.description}</p></li>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        
    )
}

 export default connect()(FishInfo)
