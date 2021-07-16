import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getLocations} from '../actions/locations'
import { getFish } from '../actions/'


function Catch (props) {
    

    useEffect(() =>{
        props.dispatch(getLocations())
    }, [])

    


    useEffect(() =>{
        props.dispatch(getFish())
    }, [])
    
    const [location, setLocation] = useState("")
    const [fishImg, setFishImg] = useState(null)
    const [formData, setFormData] = useState({

        fish: 'Snapper',
        Region: 'Hakwes Bay',
        Method: 'rod',
        time: '12:00am'

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formImage = new FormData()
        formImage.append('fish_img', fishImg)
          props.dispatch(add(formImage, formData))
    }   
    const onChangeFile = (e) => {
        setFishImg(e.target.files[0])
      }

      function onSelect(event) {
        setLocation(event.target.value);}


    return (

    <form encType='multipart/form-data' className="form box" onSubmit={handleSubmit}>
    <h1> Log My Catch</h1>
    <label>
        <select onChange={onSelect}>
              <option value={fish}>Select one...</option>
              {props.fish.map(fish=> {
                return <option key={fish.id} value={fish.id}>{fish.name}</option>
              })}
        </select>
    </label>

    <label>
                <select onChange={onSelect}>
                <option value={location}>Region</option>
                {props.locations.map (location => {
                    return <option value={location.id}>{location.location}</option> 
                    })
                }               
                 </select>
    </label>

    <label className="form__label"  htmlFor= 'animal_art' placeholder='upload image'>:Upload Image:</label>
             <input type="file" name="animal_art" id='animal_art' onChange={e => onChangeFile(e)}/>

             <input className="button is-large is-fullwidth is-success" value='add' type="submit" />


</form>

)

}

const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish,
    locations: globalState.locations
    
  }
}

export default connect(mapStateToProps)(Catch)



//fish_id drop down
//region_id drop down menu
//method_id drop down
//quantity number
//photo  photo
//weight 
//time