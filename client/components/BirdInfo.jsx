import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBird } from '../actions/bird'
import { Link } from 'react-router-dom'
 
function BirdInfo (props) {
    
    return (    

        <div className='birdWrap'> 
          <h1 className= "headerStyle">Caught a bird?</h1>
          <p><strong>All seabirds in New Zealand are protected except the black backed gull. The risks to seabirds are highest where there is overlap between fishing operations and large numbers of foraging seabirds.</strong></p>
          <div>
          <p>If a seabird is noticed on a line, stop the vessel to reduce drag on the line. When the bird is within reach, gently bring it on board by hand or using a net. Do not pull the bird up on the line as this may cause further injury. Do not handle birds by wingtips as it can break the wing. With one crew member holding the bird, another crew member can carefully detach the fishing gear from the animal.</p>
         </div> 
        <Link to='/foundBirds'><button className='buttonItem'type="button">I've found an injured bird!</button></Link>
        
            <div>
                    <img className='bird-img' src="/images/Bird/step2.png" alt="untangle bird pic"/>
                    <img className='bird-img' src="/images/Bird/step3.png" alt="untan bird pic"/>
                    <img className='bird-img' src="/images/Bird/step4.png" alt="unta bird pic"/>
                    <img className='bird-img' src="/images/Bird/step5.png" alt="unt bird pic"/>

                </div>
        </div>
)
}

export default BirdInfo
