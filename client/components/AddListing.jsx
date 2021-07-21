import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createMarketplaceListing } from '../actions/marketplace'
import { storage} from './Firebase'

const AddListing = (props) => {
  console.log(props)
  const {dispatch} = props
  const [formData, setFormData] = useState({date: 21022021 ,name: '', email: '', phone: '', description: '', image: ''})
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
                    props.dispatch(createMarketplaceListing(formData))
                })
            } 
        )
    }

  return (
    <div>
  <form className="poacher-form" onSubmit= {handleUpload} autoComplete="off">
        {/* Date */}
          <div className="field">
            <label className="label">Date</label>
              <div className="control">
                <input name="date" type="date" id="date" value={formData.date} onChange={(e) => changeHandler(e)}/>
              </div>
            </div>

            {/* Name */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input name="name" type="text" id="name" value={formData.name} onChange={(e) => changeHandler(e)}  className="input" placeholder="Name"/>
              </div>
            </div>

            {/* Email */}
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input name="email" type="text" id="email" value={formData.email} onChange={(e) => changeHandler(e)} className="input" placeholder="Email"/>
              </div>
            </div>

            {/* Phone */}
            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input name="phone" type="text" id="phone" value={formData.phone} onChange={(e) => changeHandler(e)} className="input" placeholder="Phone"/>
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
    marketplace: globalState.marketplace
  }
}

export default connect(mapStateToProps)(AddListing) 