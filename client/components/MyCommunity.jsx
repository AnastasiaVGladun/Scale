import React from 'react'
import {Link } from 'react-router-dom'

const MyCommunity = (props) => {
  return (
    <div>
      <div className="my-community-card">
        <div className="card-content">
          <div className="content">
              <h2>Help My Community</h2>
              <p className="community-p">Fish cops cannot be everywhere and we need to help them build a picture of
                  illegal behaviour so they can target their efforts.</p>
              <Link to='/poacher'><button class="button is-light">Pot a Poacher</button></Link>
              <p className="community-p"> Be our kaitiaki out there and capture observations
                  that will contribute to environmental data trends and changes</p>
              <Link to='/observations'><button class="button is-light">Observations</button></Link>
              <p className="community-p"> Want to take the boat out but my mates are too busy? Perhaps we can find someone to go with you.
                  Or post any other fishing related things here. Make use of our marketplace to
                  find fishing mates!</p>
              <Link to='/marketplace'><button class="button is-light">Marketplace</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCommunity