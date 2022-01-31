import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBoatListings } from '../actions/boat'


const Boat = (props) => {
    const { boat, dispatch } = props

    useEffect(() => {
        dispatch(getBoatListings())
    }, [])


    return (
        <>
            {boat ?
            <>
            <div className='boatName'>Boat Name: {boat.boat_name}</div>
                <div className='boatData'>

                    <div className="boatListings" key={boat.boat_licence}>
                        <p>Boat Licence</p>
                        <p>{boat.boat_licence}</p>
                        <p>expires {boat.boat_licence_expiry}</p>
                    </div>

                    <div className="boatListings" key={boat.Fish_licence}>
                        <p>Fish Licence</p>
                        <p>{boat.Fish_licence}</p>
                        <p>expires {boat.Fish_licence_expiry}</p>
                    </div>

                    <div className="boatListings" key={boat.Boat_WOF_licence}>
                        <p>Boat WOF</p>
                        <p>{boat.Boat_WOF_licence}</p>
                        <p>expires {boat.Boat_WOF_licence_expiry}</p>
                    </div>
                </div>
                </>
                :
                <div>
                <h2>Please enter your info here</h2>
                </div>
            }


        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        boat: globalState.boat,
    }
}

export default connect(mapStateToProps)(Boat)
