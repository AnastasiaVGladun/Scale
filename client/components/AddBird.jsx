import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createBird_formListing } from '../actions/bird_form'
import { storage} from './Firebase'

const AddBird = (props) => {
  const {dispatch} = props
  
  const [formData, setFormData] = useState({title: '', date: 21022021 , name: '', description: '', image: '' })
  const [img, setImg] = useState(null) 
  // Onchange Handler 
  

 


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
                    props.dispatch(createBird_formListing(formData))
                })
            } 
        )
    }

  return (
    <div className="form-container">
      <h1>Add a Bird</h1>
  <form className="form" onSubmit= {handleUpload} autoComplete="off">
        {/* Title */}
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input name="title" type="text" id="title" value={formData.title} onChange={(e) => changeHandler(e)} className="input" placeholder="Title"/>
              </div>
            </div>

            {/* Date */}
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input name="date" type="date" id="date" value={formData.date} onChange={(e) => changeHandler(e)}  className="input" />
              </div>
            </div>

            {/* Name */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input name="name" type="text" id="name" value={formData.name} onChange={(e) => changeHandler(e)} className="input" placeholder="Name"/>
              </div>
            </div>

            {/* Description */}
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input name="description" type="text" id="description" value={formData.description} onChange={(e) => changeHandler(e)} className="input" placeholder="Description"/>
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
    fish_form: globalState.fish_form
  }
}

export default connect(mapStateToProps)(AddBird) 