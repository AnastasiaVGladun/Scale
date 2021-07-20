import React from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'
import ImportantDates from './ImportantDates'
import MyLatestEntry from './MyLatestEntry'
import AchievementsPartial from './AchievementsPartial'
import MyCommunity from './MyCommunity'


const UserHome = (props) => {
    const { diary } = props

    const latestEntry = diary[diary.length - 1]

    return (
        <>
            <div className="user-stats-container">
                <ImportantDates/>
                <MyLatestEntry latestEntry={latestEntry}/>
                <AchievementsPartial/>

                <div className='weather'>
                    <Weather />
                </div>
            </div>
            <div className="my-community-container">
                <MyCommunity />
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