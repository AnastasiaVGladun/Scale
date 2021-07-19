import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getBird } from '../actions/bird'

function BirdInfo (props) {
    const {bird, dispatch} = props
    console.log(bird)
 
    useEffect(() => {

        return dispatch(getBird())
    },[])
    return (    
        <div className='wrapper'> 
          <h1 className= "headerStyle">Caught a bird?</h1>
          <p><strong>All seabirds in New Zealand are protected except the black backed gull. The risks to seabirds are highest where there is overlap between fishing operations and large numbers of foraging seabirds.</strong></p>
          <div>
          <p>If a seabird is noticed on a line, stop the vessel to reduce drag on the line. When the bird is within reach, gently bring it on board by hand or using a net. Do not pull the bird up on the line as this may cause further injury. Do not handle birds by wingtips as it can break the wing. With one crew member holding the bird, another crew member can carefully detach the fishing gear from the animal.</p>
         </div> 
<a class="w3-button w3-black" href="#/diary">I've found an injured bird! </a>

            <div>

                {/* <ul id="horizontal-list">
                    {bird.map(birdinfo => {
                        return <div className= "bird-info" key={birdinfo.id}>
                            <li><p> {birdinfo.name}</p></li>
                            <li>{birdinfo.description}</li>
                        </div>
                    })}
                </ul> */}


                <img className='bird-img' src="/images/Bird/step2.png" alt="untangle bird pic"/>
                <img className='bird-img' src="/images/Bird/step3.png" alt="untan bird pic"/>
                <img className='bird-img' src="/images/Bird/step4.png" alt="unta bird pic"/>
                <img className='bird-img' src="/images/Bird/step5.png" alt="unt bird pic"/>

            </div>
        </div>
)
}
const mapStateToProps = (globalState) => {
return {
  bird: globalState.bird
}
}
export default connect(mapStateToProps)(BirdInfo)