import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { getStats } from '../actions/stats'
import { getLocations} from '../actions/locations'


function Stats (props) {
    const [location, setLocation] = useState("All")

    useEffect(() =>{
        props.dispatch(getStats(location))
    }, [location])

    useEffect(() =>{
        props.dispatch(getLocations())
    }, [])

    function onSelect(event) {
        setLocation(event.target.value);

    }

    return (
        <div className='stat'>
        <h1 className= "headerStyle">Statistics</h1>
        <p>Hi New Zealand! Here’s how we are tracking with our fish catch.<br />
        Look around to see what type of fish is being caught in each region.</p><br />
        <h5>Choose your region</h5>
        
        
            <select className='dropMenu'onChange={onSelect}>
                <option value="All">New Zealand</option>
                {props.locations.map (location => {
                    return <option  key = {location.id} value={location.id}>{location.location}</option> 
                    })
                }               
                 </select>
                 <div className="statWrap">
            {props.stats.map((stat) => {
                // console.log (stat)
                return <div className='statItem' key ={stat.id}> 
                <div className='statInfo'>{stat.name}</div><br />
                <img className='statImg'src={`/images/Fish/${stat.image}@2x.png`}/>
                <div className='statNum'>{stat.quantity}</div>
                </div>
            })}
            
        </div>
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        stats: globalState.stats,
        locations: globalState.locations
    }
  }
  
  export default connect(mapStateToProps)(Stats)