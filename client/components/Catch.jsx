import { connect } from 'react-redux'
import React, { Children, useEffect, useState } from 'react'
import { getLocations} from '../actions/locations'
import { getFish } from '../actions/fish'
import { getMethods} from '../actions/methods'
import { addCatch } from '../actions/diary'
import { storage } from './Firebase' 
// import { put } from '../../server/routes/diaryRoutes'
// import { ref } from '../../server/db/connection'

function Catch (props) {

    useEffect(() =>{
        props.dispatch(getLocations())
        props.dispatch(getFish())
        props.dispatch(getMethods())
    }, [])
    
    const [fishImg, setFishImg] = useState(null)
    const [formData, setFormData] = useState({

        fish_id: 'Snapper',
        region_id: 'Hakwes Bay',
        method_id: 'rod',
        time: '12:00am',
        weight: '50'

    })

    const  changeHandler = (e) => {
        console.log('click')
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault()
        const formImage = new FormData()
        formImage.append('fish_img', fishImg)
          props.dispatch(addCatch(formImage, formData))
    }   

    const onChangeFile = (e) => {
        if (e.target.files[0]){
            setFishImg(e.target.files[0])
    }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error)
            },
            () => {
            storage
                .ref('images')
                .Child(image.name)
                .getDownloadURL()
                .then(url => {
                    console.log(url)
                })
            }
        )
    }

    return (
      
    <form className="form box" className="form box" className="form box" onSubmit={handleUpload}>
    
            <h1> Log My Catch</h1>

        <label className="label is-large has-text-centered"> Fish:
            <select name="fish_id" value={formData.name} onChange={(e) => changeHandler(e)} >
                <option >Select Fish Species:</option>
                {props.fish.map(fish=> {return <option key={fish.id} value={fish.id}>{fish.name}</option>})}
            </select>
        </label>

        <label className="label is-large has-text-centered"> Region:
            <select name="region_id" value={formData.location} onChange={(e) => changeHandler(e)} >
                <option >Select Region</option>
                {props.locations.map (location => { return <option value={location.id}>{location.location}</option> })}               
            </select>
        </label>

        <label className="label is-large has-text-centered"> Method:
            <select name="method_id" value={formData.method} onChange={(e) => changeHandler(e)} >
                <option >Select method</option>
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

        <label className="label is-large has-text-centered" htmlFor="fish_img">
            <span className="form__label-title">Fish Image: </span>
            <input type="file" name="fish_img" onChange={onChangeFile} />
          </label>

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




