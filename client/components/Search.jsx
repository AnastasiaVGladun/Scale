import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { connect } from 'react-redux'

import FishInfo from './FishInfo';

const SearchBox = (props) => {
    const { fish } = props
    const [search, setSearch] = useState('')
    
     const handleChange = (e) => {
        //  console.log(e.target.value)
         e.preventDefault()
        setSearch(e.target.value)
     } 

     const filteredInfo = search.length === 0
     const speciesArr = fish.map (species =>{
        return species.name })
     console.log(search)
     console.log(fish)
     console.log(speciesArr)
    ? fish
    : speciesArr.filter(fish => {
        return fish.toLowerCase().includes(search.toLowerCase())  
        
    })       
       

  return (
    <div className='infoWrap'>
              <h1 className= "headerStyle">Fishing Species in Aotearoa</h1>
             <h5>A visual reference for identifying saltwater (and freshwater) fish species that are located in New Zealand waters.</h5>
             <h5>Learn more about each fish species such as it's physical characteristics, typical locations in New Zealand and suitability for eating.</h5>
                
                <input 
                    type="text" 
                    placeholder="Search name" 
                    value={search}
                    onChange={handleChange}
                    />
            <FishInfo fish={filteredInfo}/>
    </div>
  );
}

const mapStateToProps = (globalState) => {
    return {
      fish: globalState.fish
    }
  }
  export default connect(mapStateToProps)(SearchBox)

// export default SearchBox
