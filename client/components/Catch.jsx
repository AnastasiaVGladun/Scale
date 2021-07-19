import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getLocations} from '../actions/locations'
import { getFish } from '../actions/fish'
import { getMethods} from '../actions/methods'
import { addCatch } from '../actions/diary'


function Catch (props) {
    

    useEffect(() =>{
        props.dispatch(getLocations())
        props.dispatch(getFish())
        props.dispatch(getMethods())
    }, [])
 
    const [methods, setMethods] = useState("")
    const [location, setLocation] = useState("")
    const [fish, setFish] = useState("")
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
          props.dispatch(addCatch(formImage, formData))
    }   
    
    const onChangeFile = (e) => {
        setFishImg(e.target.files[0])
    }

    function onSelect(event) {
        setMethods(event.target.value);
        setFish(event.target.value);
        setFormData(event.target.value);
        setLocation(event.target.value);
    }


    return (

        <h1> Log My Catch</h1>,
    <form className="form box" encType='multipart/form-data' className="form box" onSubmit={handleSubmit}>
    
        <label> Fish:
            <select onChange={onSelect}>
                <option value={fish}>Select Fish Species:</option>
                {props.fish.map(fish=> {return <option key={fish.id} value={fish.id}>{fish.name}</option>})}
            </select>
        </label>

        <label> Region:
            <select onChange={onSelect}>
                <option value={location}>Select Region</option>
                {props.locations.map (location => { return <option value={location.id}>{location.location}</option> })}               
            </select>
        </label>

        <label> Method:
            <select onChange={onSelect}>
                <option value={methods}>Select method</option>
                {props.methods.map (method => { return <option value={method.id}>{method.method}</option> })}               
            </select>
        </label>

        <label>Time:</label>
        <input type="time" id="appt" name="appt" min="09:00" max="18:00" required></input>

        <label className="form__label" htmlFor="fish_img">
            <span className="form__label-title">Fish Image (200x200ish)</span>
            <input type="file" name="fish_Img" onChange={onChangeFile} />
          </label>

        <button type="submit" className="btn">Submit</button>


    </form>
)

}

const mapStateToProps = (globalState) => {
  return {
    fish: globalState.fish,
    locations: globalState.locations,
    methods: globalState.methods
    
  }
}

export default connect(mapStateToProps)(Catch)



//weight 
