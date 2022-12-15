import React from 'react'
import { GoogleMap, LoadScript, } from "@react-google-maps/api";
import ApiMaps from './ApiMaps';

const Mapa = () => {
const containerStyle = {
    width: "100%",
    height: "400px",
}
//19.206295206921986, -98.7789865674287
const center = {
    lat: 19.206295206921986,
    lng: -98.7789865674287,
}

const mapClicked = (event) => { 
    console.log(event.latLng.lat(), event.latLng.lng()) 
}

return (
    <div>
          <LoadScript googleMapsApiKey={ApiMaps.ApiKey}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={15}
                onClick={mapClicked}>
            </GoogleMap>
        </LoadScript>
    </div>
  )
}

export default Mapa