import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getRules } from '../actions/rules'

function RulesInfo (props) {
 
    const {rules, dispatch} = props
    console.log(rules)
 
    useEffect(() => {
        return dispatch(getRules())
    },[])
    
    return (    
            <div>
                <div>
                    <ul id="horizontal-list">
                        {rules.map(rulesinfo => {
                            return <div className="rules-info" key={rulesinfo.id}>
                                <li><p> {rulesinfo.region}</p></li>

                                <li>{rulesinfo.link}</li>
                            </div>
                        })}
                    </ul>
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