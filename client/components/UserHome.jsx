import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Weather from './Weather'




const UserHome = (props) => {
    const diary = props.diary
    console.log(diary)
    const latestEntry = diary[diary.length - 1]
    console.log(latestEntry)


    return (
        <>
        <div className='weather'>
        <Weather/>
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


