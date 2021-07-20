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
                    {/* <div className='boatName'>Boat Name: {boat.boat_name}</div> */}

                    <div className="boatListings" key={boat.key}>
                        <h3>Boat Licence</h3><br></br>
                        <h3>{boat.boat_licence}</h3>
                        <p>expires {boat.boat_licence_expiry}</p>
                    </div>

                    <div className="boatListings" key={boat.key}>
                        <h3>Fish Licence</h3><br></br>
                        <h3>{boat.Fish_licence}</h3>
                        <p>expires {boat.Fish_licence_expiry}</p>
                    </div>

                    <div className="boatListings" key={boat.key}>
                        <h3>Boat WOF</h3><br></br>
                        <p>{boat.Boat_WOF_licence}</p>
                        <p>expires {boat.Boat_WOF_licence_expiry}</p>
                    </div>
                </div>
                </>
                :
                <h2>Please enter your info here</h2>
            }

            <div className="add-listing"><Link to='/addBoat'><button>Add Details</button></Link></div>


        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        boat: globalState.boat,
    }
}

export default connect(mapStateToProps)(Boat)
