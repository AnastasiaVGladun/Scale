import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Home ({auth}) {

    return (    
            <div>
                {/* <div>
                    <ul id="horizontal-list">
                    <li> <p>Fish Info</p> </li>
                    <li> <p>Bird Info</p> </li>
                    <li> <p>Statictics</p> </li>
                    <li> <p>Rules</p> </li>
                    <li> <p>Contact</p> </li>
                    <li> <p>Login</p> </li>
                    <li> <p>Register</p> </li>
                    </ul>
                </div> */}
                {auth.isAuthenticated && 
                <div>
                    <img id="home-image" src="/images/Pictures/cover_page.png" />
                </div>
                }
            </div>


    )
}


const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish,
    auth: globalState.auth
  }
}


export default connect(mapStateToProps)(Home)
