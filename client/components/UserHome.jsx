import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'
import { Link } from 'react-router-dom'
import { getAchievements } from '../actions/achievements'
import Boat from './Boat'


const UserHome = (props) => {
    const { diary, achievements, dispatch} = props

    const latestEntry = diary[diary.length - 1]
    const latestAchievement = achievements[achievements.length - 1]
    console.log(latestEntry)
    useEffect(() => {
        dispatch(getAchievements())
    }, [])


    return (
        <div className='userWrap'>
        {latestAchievement ?   
        
        <h1>Hello {latestEntry.username}!</h1>
        :
        <h1>Hello Fisherman!</h1>
        }

            <div className='weather'>
                <Weather />
            </div>

            <div className='importantDates'>
            <h4>Important Dates</h4>
            
               <Boat/>
               <div ><Link to='/addBoat'><button className="buttonItem" >Add Details</button></Link></div>
           
            </div>
            <div className='latestEntry'>
                <h4>My Latest Entry</h4>
                <div >
                    {latestEntry ?
                        <div className='entryList' key = {latestEntry.id}>
                            <div> <img src={`/images/Fish/${latestEntry.image}@2x.png`} /></div>
                            <div><h5>{latestEntry.name}</h5></div>
                            <div><h5>Quantity:{latestEntry.quantity}</h5></div>
                        </div>
                        :
                        <div>
                            <h4>Uh oh - no catch yet!Better head out there...</h4>
                            <img src ='./images/Icon/sammyfavi.png'></img>
                        </div>
                    }
                </div>
            </div>
           

            <div className='latestAchiv'>
                <h4>My Latest Achievement</h4>
                    {latestAchievement ?
                        <div className='achivList' key = {latestAchievement.id}>
                            <div><img src={latestAchievement.badge_image}></img></div>
                            <div><h4>{latestAchievement.name}</h4></div>
                            <div><h5>{latestAchievement.description}</h5></div>
                        </div>
                        :
                        <div>
                        <h4>Come on mate - go fishing to get some achievements!</h4>
                        <img src ='./images/selectMethod/fishDive@2x.png'></img>
                        
                        </div>
                    }
            </div>

            <div className='communityHelp'>
                <h4>Help My Community</h4>
                <div className='helpList'>
                    <div className='helpItem'>
                        <p>Fish cops cannot be everywhere and we need to help them build a picture of
                            illegal behaviour so they can target their efforts.</p>
                        <Link to='/poacher'><button className='buttonItem'type="button">Pot a Poacher</button></Link>
                    </div>
                    <div className='helpItem'>
                        <p> Be our kaitiaki out there and capture observations
                            that will contribute to environmental data trends and changes</p>
                        <Link to='/obs'><button className='buttonItem'type="button">Capture Observations</button></Link>
                    </div>  
                    <div className='helpItem'>
                        <p> Want to take the boat out but my mates are too busy? Perhaps we can find someone to go with you.
                            Or post any other fishing related things here. Make use of our marketplace to
                            find fishing mates!</p>
                        <Link to='/marketplace'><button className='buttonItem' type="button">Marketplace</button></Link>
                    </div>
                </div>
            </div>

        </div >
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