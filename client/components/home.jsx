import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Home () {

    return (    
            <div>
                <div>
                    <img id="home-image" src="/images/Pictures/cover_page.png" />
                </div>
            </div>


    )
}





const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish
  }
}

export default connect(mapStateToProps)(Home)
