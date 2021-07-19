import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'
import { Link } from 'react-router-dom'
import { getAchievements } from '../actions/achievements'



const UserHome = (props) => {
    const { diary, achievements, dispatch } = props

    const latestEntry = diary[diary.length - 1]
    const latestAchievement = achievements[achievements.length - 1]

    useEffect(() => {
        dispatch(getAchievements())
    }, [])


    return (
        <div className='userWrap'>
        <h1>Hello{diary.username}!</h1>
            <div className='weather'>
                <Weather />
            </div>


            <h2>Important Dates (placeholder)</h2>
            <div className='boatInfo'>
                <p>Boat Licence expiry date</p>
                <p>Fish Licence expirty date</p>
                <p>Boat WOF expiry date</p>
            </div>

            <div>
                <h2>My Latest Entry</h2>
                <div>
                    {latestEntry ?
                        <div key = {latestEntry.id}>
                            <div> <img src={`/images/Fish/${latestEntry.image}@2x.png`} /></div>
                            <div>{latestEntry.name}</div>
                            <div>Quantity:{latestEntry.quantity}</div>
                        </div>
                        :
                        <h2>Uh oh - no catch yet!</h2>
                    }
                </div>
            </div>

            <div>
                <h2>My Latest Achievement</h2>
                <div>
                    {latestAchievement ?
                        <div key = {latestAchievement.id}>
                            <div><img src={latestAchievement.badge_image}></img></div>
                            <div>{latestAchievement.name}</div>
                            <div>{latestAchievement.description}</div>
                        </div>
                        :
                        <h2>Go fishing to get some achievements!</h2>
                    }
                </div>
            </div>

            <div>
                <h2>Help My Community</h2>
                <p>Fish cops cannot be everywhere and we need to help them build a picture of
                    illegal behaviour so they can target their efforts.</p>
                <Link to='/poacher'><button className='buttonItem'type="button">Pot a Poacher</button></Link>
                <p> Be our kaitiaki out there and capture observations
                    that will contribute to environmental data trends and changes</p>
                <Link to='/observations'><button className='buttonItem'type="button">Capture Observations</button></Link>
                <p> Want to take the boat out but my mates are too busy? Perhaps we can find someone to go with you.
                    Or post any other fishing related things here. Make use of our marketplace to
                    find fishing mates!</p>
                <Link to='/marketplace'><button className='buttonItem' type="button">Marketplace</button></Link>

            </div>

        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        diary: globalState.diary,
        auth: globalState.auth,
        achievements: globalState.achievements
    }
}

export default connect(mapStateToProps)(UserHome)