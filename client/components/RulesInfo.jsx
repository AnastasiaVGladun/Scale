import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getRules } from '../actions/rules'
import {Link} from 'react-router-dom'

function RulesInfo (props) {
 
    const {rules, dispatch} = props
    console.log(rules)
 
    useEffect(() => {

        return dispatch(getRules())
    },[])
    
    return (    
      <div className="rules-container">
        <h1 className= "headerStyle">Recreational fishing rules</h1>
        <p>Using correct fishing methods and equipment protects local fisheries and keeps fish numbers sustainable for future generations. </p>
        
          <div className="rules-main">
            <div className='rulesWrap'>
              <ul id="horizontal-list">
                {rules.map(rulesinfo => {
                  return <a href={rulesinfo.link} target="_blank">
                          <div className="rules-info" key={rulesinfo.id}>
                            {rulesinfo.region}      
                          </div>
                        </a>
                })}
              </ul>
            </div>
            <div className="rules-map">
              <img className='mapPhoto' src={'/images/icon/map.gif'} />
            </div>
          </div>
      </div>

    )
}

const mapStateToProps = (globalState) => {
    return {
      rules: globalState.rules
    }
  }
  export default connect(mapStateToProps)(RulesInfo)