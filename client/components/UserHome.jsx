import React from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'
import {Link} from 'react-router-dom'




const UserHome = (props) => {
    const diary = props.diary
    console.log(diary)
    const latestEntry = diary[diary.length - 1]
    console.log(latestEntry)


    return (
        <>
            <div className='weather'>
                <Weather />
            </div>


            <h2>Important Dates (placeholder)</h2>
            <div>
                <p>Boat Licence expiry date</p>
                <p>Fish Licence expirty date</p>
                <p>Boat WOF expiry date</p>
            </div>

            <h2>My Latest Entry</h2>
            <div>
                {latestEntry &&
                    <>
                        <div> <img src={`/images/Fish/${latestEntry.image}@2x.png`} /></div>
                        <div>{latestEntry.name}</div>
                        <div>Quantity:{latestEntry.quantity}</div>
                    </>
                }
            </div>

            <div>
                <h2>Achievements</h2>
                <p>placeholder for achievement</p>
            </div>

            <div>
                <h2>Help My Community</h2>
                <p>Fish cops cannot be everywhere and we need to help them build a picture of
                    illegal behaviour so they can target their efforts.</p>
                <Link to='/poacher'><button type="button">Pot a Poacher</button></Link>
                <p> Be our kaitiaki out there and capture observations
                    that will contribute to environmental data trends and changes</p>
                <Link to='/observations'><button type="button">Capture Observations</button></Link>
                <p> Want to take the boat out but my mates are too busy? Perhaps we can find someone to go with you.
                    Or post any other fishing related things here. Make use of our marketplace to
                    find fishing mates!</p>
                <Link to='/marketplace'><button type="button">Marketplace</button></Link>

            </div>

        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        diary: globalState.diary,
        auth: globalState.auth
    }
}

export default connect(mapStateToProps)(UserHome)