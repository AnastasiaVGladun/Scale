import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createObsListing } from '../actions/obs'

const AddListing = (props) => {
    const { dispatch } = props
    const [formData, setFormData] = useState({date:'21-02-2021', title:'', description:'' })

    // Onchange Handler 
    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    // Submit Handler 
    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(createObsListing(formData))
        setFormData({date:'21-02-2021', title:'', description:''})
    }


    return (
        <div>
            <h1 className="obs-heading">Add Observations</h1>
            <form className="poacher-form" onSubmit={(e) => submitHandler(e)} autoComplete="off">
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