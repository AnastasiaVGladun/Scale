import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { checkAuth } from '../actions/auth'
import Catch from './Catch'
import { Link} from 'react-router-dom'


function Diary (props){

return (
    <>
    <div className='diaryWrap'>
        <h1>My Fishing Diary</h1>
        <Link to='/addCatch'><button className='buttonItem'type="button">Add a New Catch</button></Link>

       {props.diary ?
        props.diary.map(entry => {
            // console.log(entry)
            return (
                <li className='diaryList'>
                <h2>{entry.date}</h2>
                <h3>{entry.location}</h3>
                <p>My perfect fish skhfbvkfjbvdfvjdfvvjnnnnnrnnfdnvkhrbflkewhrgtkwrtbv.mrf bm.rwthbghwkjltb vmnfbgwjrtbgtm.fnbv s.rgbktrjbgv msfdvbmrtbgday</p>
                <div className="myCatch">
                    <p>{entry.method}
                    {/* <br />
                    <a>method</a> */}
                    </p>
                    <p>{entry.name}
                    
                    </p>
                    <img src={`/images/Fish/${entry.image}@2x.png`} ></img>
                    <h4>{entry.quantity}
                    <br />
                    {/* <a>quantity</a> */}
                    </h4> 
                    <img className='fishPhoto' src={`/images/Fishing people/${entry.photo}`} ></img>
                </div>
                </li>
                )
        })
                 :
                 <div>
                <img src ='./images/Icon/sammyfavi.png'></img>
                <p>Uh oh - no catch yet!</p>
                </div>
            
        }
    </div>
    </>
)
}


const mapStateToProps = (globalState) => {
    return {
        diary: globalState.diary,
        auth: globalState.auth
    }
  }
  
  export default connect(mapStateToProps)(Diary)