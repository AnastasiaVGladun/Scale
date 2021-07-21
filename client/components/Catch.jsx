import { connect } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getLocations} from '../actions/locations'
import { getFish } from '../actions/fish'
import { getMethods} from '../actions/methods'
import { addCatch } from '../actions/diary'
import { storage } from './Firebase' 


function Catch (props) {

    useEffect(() =>{
        props.dispatch(getLocations())
        props.dispatch(getFish())
        props.dispatch(getMethods())
    }, [])
    
    const [fishImg, setFishImg] = useState(null) 
    const [formData, setFormData] = useState({
     

        fish_id: '',
        region_id: '',
        method_id: '',
        time: '',
        weight: '',
        photo: ''

    })

    const  changeHandler = (e) => {
        console.log('click')
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    
    const onChangeFile = (e) => {
        if (e.target.files[0]){
            setFishImg(e.target.files[0])
    }
    }

    const handleUpload = (e) => {
        e.preventDefault()
        const image = fishImg
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
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    formData.photo = url
                    props.dispatch(addCatch(formData))
                })
            } 
        )
    }

    return (
      <div className="form-contanier">
           <h1> Log My Catch</h1>
        <form className="form"  onSubmit={handleUpload}>
    
          
       <div className="field">
        <label className="label"> Fish:</label>
        <div className="control">
            <select name="fish_id" value={formData.name} onChange={(e) => changeHandler(e)} >
                <option >Select Fish Species:</option>
                {props.fish.map(fish=> {return <option key={fish.id} value={fish.id}>{fish.name}</option>})}
            </select>
        </div>
        </div>
         
        <div className="field">
        <label className="label"> Region:</label>
        <div className="control">
            <select name="region_id" value={formData.location} onChange={(e) => changeHandler(e)} >
                <option >Select Region</option>
                {props.locations.map (location => { return <option value={location.id}>{location.location}</option> })}               
            </select>
        </div>
        </div>
        
        <div className="field">
        <label className="label"> Method:</label>
        <div className="control">
            <select name="method_id" value={formData.method} onChange={(e) => changeHandler(e)} >
                <option >Select method</option>
                {props.methods.map (method => { return <option value={method.id}>{method.method}</option> })}               
            </select>
        </div>
        </div>

       {/* 
        <label className="label is-large has-text-centered">Time:
        <input type="time" name="time" value={formData.time} onChange={(e) => changeHandler(e)} id="appt" name="appt"  ></input>
        </label> */}
        
        <div className="field">
        <label className="label"> Time spent fishing: </label>
        <div className="control">
        <input type="number" name="time" value={formData.time} onChange={(e) => changeHandler(e)} required></input>
        </div>
        </div>

        <div className="field">
        <label className="label"> Notes: </label>
        <div className="control">
        <input type="text" name="diary" value={formData.diary} onChange={(e) => changeHandler(e)} required></input>
        </div>
        </div>

        <div className="field">
        <label className="label" htmlFor="fish_img"> </label>
        <div className="control">
            <span className="form__label-title">Fish Image: </span>
            <input type="file" name="fish_img" onChange={onChangeFile} />
          </div>
          </div>

          <div className="control">
        <button className="buttonItem" type="submit" className="btn">Submit</button>
        </div>
        </form>
    </div>
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




