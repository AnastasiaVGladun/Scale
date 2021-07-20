import React, { useEffect, useState } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'
import { getLocations} from '../actions/locations'

function Weather(props) {

    const [location, setLocation] = useState("Wellington")
    const [latitude, setLatitude] = useState('-40.62087917671673')
    const [longitude, setLongitude] = useState('175.1745851465492')

    useEffect(() =>{
        props.dispatch(getLocations())
    }, [])

    function onSelect(event) {
        
        // console.log("Our value: ", event.target.value);
        setLocation(event.target.value);

        
        const foundLocation = props.locations.find(el => {
            return el.location == event.target.value
        })
        if (foundLocation != undefined) {
            setLatitude(foundLocation.latitude);
            setLongitude(foundLocation.longitude);
        }
    }
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '1c98b11f52ebf715913efdc9fe648e4b',
    lat: latitude,
    lon: longitude,
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
      <>
    <select onChange={onSelect} className='dropMenu'>
    <option value="All">Choose your region</option>
    {props.locations.map (location => {
        return <option key = {location.id}>{location.location}</option> 
        })
    }               
     </select>
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={location}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </>
  );
};

const mapStateToProps = (globalState) => {
    return {
        locations: globalState.locations,
        auth: globalState.auth
    }
  }
  
  export default connect(mapStateToProps)(Weather)