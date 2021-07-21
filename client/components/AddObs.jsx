import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createObsListing } from '../actions/obs'
import { storage } from './Firebase'

const AddListing = (props) => {
    const { dispatch } = props
    const [formData, setFormData] = useState({date:'', title:'', description:'', image: '' })
    const [img, setImg] = useState(null) 

 


    const changeHandler = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      }
        
        const onChangeFile = (e) => {
            if (e.target.files[0]){
                setImg(e.target.files[0])
        }
        }
    
        const handleUpload = (e) => {
            e.preventDefault()
            const image = img
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
                        formData.image = url
                        props.dispatch(createObsListing(formData))
                    })
                } 
            )
        }


    return (
        <div>
            <h1 className="obs-heading">Add Observations</h1>
            <form className="poacher-form" onSubmit={handleUpload} autoComplete="off">
                {/* Date */}
                <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                        <input name="date" type="date" id="date" value={formData.date} onChange={(e) => changeHandler(e)} />
                    </div>
                </div>

                {/* Title */}
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input name="title" type="text" id="title" value={formData.title} onChange={(e) => changeHandler(e)} className="input" placeholder="Title" />
                    </div>
                </div>

                {/* Description */}
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <input name="description" type="text" id="description" value={formData.description} onChange={(e) => changeHandler(e)} className="input" placeholder="Description" />
                    </div>
                </div>

                <label className="label" htmlFor="fish_img">
            <span className="form__label-title">Image: </span>
            <input type="file" name="image" onChange={onChangeFile} />
  </label>

                {/* Submit Button */}
                <div className="control">
                    <button className="buttonItem">Submit</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        obs: globalState.obs
    }
}

export default connect(mapStateToProps)(AddListing)