import React, { useEffect } from 'react'
import { connect } from 'react-redux'



function home (props) {


    


}





const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish
  }
}

export default connect(mapStateToProps)(home)
