import React from 'react'

const MyLatestEntry = (props) => {
  const {latestEntry} = props

  return (
    <div className="user-home-card">
      <div className="card-content">
        <div className="content">
          <h2>My Latest Entry</h2>
          <hr/>
          {latestEntry &&
            <>
                <div> <img src={`/images/Fish/${latestEntry.image}@2x.png`} /></div>
                <div>{latestEntry.name}</div>
                <div>Quantity:{latestEntry.quantity}</div>
            </>
            }
        </div>
      </div>
    </div>
  )
}

export default MyLatestEntry