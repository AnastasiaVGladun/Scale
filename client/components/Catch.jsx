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

        name: 'Snapper',
        location: 'Hakwes Bay',
        method: 'rod',
        time: '12:00am',
        weight: '50'

    })


    const  changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

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
        setLocation(event.target.value);
    }


    return (

      
    <form className="form box" className="form box" encType='multipart/form-data' className="form box" onSubmit={handleSubmit}>
    
            <h1> Log My Catch</h1>


        <label className="label is-large has-text-centered"> Fish:
            <select name="name" value={formData.name} onChange={(e) => changeHandler(e)} onChange={onSelect}>
                <option value={fish}>Select Fish Species:</option>
                {props.fish.map(fish=> {return <option key={fish.id} value={fish.id}>{fish.name}</option>})}
            </select>
        </label>

        <label className="label is-large has-text-centered"> Region:
            <select name="location" value={formData.location} onChange={(e) => changeHandler(e)} onChange={onSelect}>
                <option value={location}>Select Region</option>
                {props.locations.map (location => { return <option value={location.id}>{location.location}</option> })}               
            </select>
        </label>

        <label className="label is-large has-text-centered"> Method:
            <select name="method" value={formData.method} onChange={(e) => changeHandler(e)} onChange={onSelect}>
                <option value={methods}>Select method</option>
                {props.methods.map (method => { return <option value={method.id}>{method.method}</option> })}               
            </select>
        </label>
{/* 
        <label className="label is-large has-text-centered">Time:
        <input type="time" name="time" value={formData.time} onChange={(e) => changeHandler(e)} id="appt" name="appt"  ></input>
        </label> */}


        <label className="label is-large has-text-centered"> Grams:
        <input type="number" name="weight" value={formData.weight} onChange={(e) => changeHandler(e)} required></input>
        </label>

        {/* <label className="label is-large has-text-centered" htmlFor="fish_img">
            <span className="form__label-title">Fish Image: </span>
            <input type="file" name="fish_Img" onChange={onChangeFile} />
          </label> */}

        <button className="button is-large is-fullwidth is-success" type="submit" className="btn">Submit</button>


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
