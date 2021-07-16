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
        <>
            <select onChange={onSelect}>
                <option value="All">All</option>
                {props.locations.map (location => {
                    return <option key = {location.id} value={location.id}>{location.location}</option> 
                    })
                }               
                 </select>

            
            Hello from stats page
            {props.stats.map((stat) => {
                console.log (stat)
                return <div key ={stat.id}> <img src={`/images/Fish/${stat.image}@2x.png`}/>{stat.name} - {stat.quantity}</div>
            })}
            {/* {JSON.stringify(props.stats)} */}

        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        stats: globalState.stats,
        locations: globalState.locations
    }
  }
  
  export default connect(mapStateToProps)(Stats)