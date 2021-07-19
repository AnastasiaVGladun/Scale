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

            <div >
                <h1 className= "headerStyle">Recreational fishing rules</h1>
                <p>Using correct fishing methods and equipment protects local fisheries and keeps fish numbers sustainable for future generations. </p>

                < div className='rulesWrap'>
                <img className='mapPhoto' src={'/images/icon/map.gif'} ></img>
                    
                            <ul id="horizontal-list">

                                {rules.map(rulesinfo => {
                                 return <div className="rules-info"key={rulesinfo.id}>
                                      <li>
                                        <p> 
                                          <a href={rulesinfo.link}target="_blank">{rulesinfo.region}</a>
                                        </p>
                                        </li>       
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