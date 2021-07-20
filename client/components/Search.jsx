import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { connect } from 'react-redux'

import FishInfo from './FishInfo';

const SearchBox = (props) => {
    const { fish } = props
    const [search, setSearch] = useState('')
    
     const handleChange = (e) => {
         e.preventDefault()
        setSearch(e.target.value)
     } 


    const filteredName = fish.filter(theFish => {
        console.log('theFish',theFish.name)
        return theFish.name.toLowerCase().includes(search.toLowerCase())  
        
    })   
    console.log('name',filteredName)    
       

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
            <FishInfo fish={filteredName}/>
    </div>
  );
}

const mapStateToProps = (globalState) => {
    return {
      fish: globalState.fish
    }
  }
  export default connect(mapStateToProps)(SearchBox)
  
