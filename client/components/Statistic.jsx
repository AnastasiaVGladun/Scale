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
        <div className="stats-container">
            <select onChange={onSelect}>
                <option value="All">All</option>
                {props.locations.map (location => {
                    return <option key = {location.id} value={location.id}>{location.location}</option> 
                    })
                }               
            </select>
            <div className="stats-wrap">
                {props.stats.map((stat) => {
                    return <div className="fish-stat" key ={stat.id}> 
                        <img src={`/images/Fish/${stat.image}@2x.png`}/>
                        <p>
                            {stat.name} - {stat.quantity}
                        </p>
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