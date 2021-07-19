import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBoatListings } from '../actions/boat'
import { Link } from 'react-router-dom'

const Boat = (props) => {
    const { dispatch, boat } = props

    useEffect(() => {
        dispatch(getBoatListings())
    }, [])

    return (
        <>
        <div className="boat-body">
            <h2> className="boat-heading">{boat.boat_name}</h2>
            <div className="listing-container">
                <div className="add-listing"><Link to='/addlisting'><button>+ Add listing</button></Link></div>
            </div>
        </div>
         
         <div className="listing" key={boat.id}>
            <h3>Boat Licence</h3><br></br>
            <p>{boat.boat_licence}</p>
            <p>{boat.boat_licence_expiry}</p>
        </div>

        <div className="listing" key={boat.id}>
            <h3>Fish Licence</h3><br></br>
            <p>{boat.Fish_licence}</p>
            <p>{boat.Fish_licence_expiry}</p>
        </div>

        <div className="listing" key={boat.id}>
            <h3>Boat WOF</h3><br></br>
            <p>{boat.Boat_WOF_licence}</p>
            <p>{boat.Boat_WOF_licence_expiry}</p>
        </div>
        
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        boat: globalState.boat
    }
}

export default connect(mapStateToProps)(Boat)
