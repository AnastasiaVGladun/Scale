import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Home () {

    return (    
           
      <img className="homeImage" src="/images/Pictures/scaleCover.png" />

          


    )
}





const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish
  }
}


export default connect(mapStateToProps)(Home)
