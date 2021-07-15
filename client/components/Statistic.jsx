import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'


function Stats (props) {

    return (
        <>

        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        stats: globalState.stats
    }
  }
  
  export default connect(mapStateToProps)(Stats)