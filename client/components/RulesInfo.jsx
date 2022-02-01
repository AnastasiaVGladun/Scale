import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getRules } from '../actions/rules'

function RulesInfo (props) {
 
    const {rules, dispatch} = props
    // console.log(rules)
 
    useEffect(() => {

        return dispatch(getRules())
    },[])
    
    return (    

            <div className="inforulesWrap">
                <p className= "headerStyle">Recreational fishing rules</p>
                <h5 className="rules">Using correct fishing methods and equipment protects local fisheries<br />
                 and keeps fish numbers sustainable for future generations. </h5>

                < div className='rulesWrap'>        
                        <ul >

                                {rules.map(rulesinfo => {
                                 return <div className="rules-info"key={rulesinfo.id}>
                                      <li>
      
                                          <a href={rulesinfo.link}target="_blank">{rulesinfo.region}</a>
                                      
                                        </li>       
                                    </div>
                                })}
                            </ul>
                            <img className='mapPhoto' src="/images/icon/NZoutline.png" ></img>
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