import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'




const UserHome = (props) => {
    const diary = props.diary
    console.log(diary)
    const latestEntry = diary[diary.length - 1]
    console.log(latestEntry)


    return (
        <>
            <h1>This is user home </h1>

            <h2>My Latest Entry</h2>
            <div>
                {latestEntry &&
                    <>
                    <img src={`/images/Fish/${latestEntry.image}@2x.png`} />{latestEntry.name} - {latestEntry.quantity}
                    </>
                }
            </div>





        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        diary: globalState.diary,
        // stats: globalState.stats,
        auth: globalState.auth
    }
}

export default connect(mapStateToProps)(UserHome)


