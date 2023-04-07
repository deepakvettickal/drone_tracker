import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

let markers=[
  {
      id:1,
      latitude:  52.408298947810216,
      longitude:  -1.5099050177174618,
      label:'Coventry'

  },
  {
      id: 2,
      latitude:  51.49856446535665,
      longitude: -0.10461168825960651,
      label: 'London'
  }
]


const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDb5o89Gc8hXD6H6bOqou4pivkImVXQKu8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%`,  }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 51.49856446535665, lng: -0.10461168825960651 }}>
    {props.isMarkerShown && markers.map(marker => {
  return (
      <Marker
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
      >
          <InfoWindow>
              <div>
                  {marker.label}
              </div>
          </InfoWindow>
      </Marker>
  )
})}
<Marker
          icon={{
            url: (require('./drone.png')),
            fillColor: '#EB00FF',
            scale: 0.5,
        }}
          key={10}
          position={props.droneLocation}
      >
          <InfoWindow>
              <div>
                  {'drone'}
              </div>
          </InfoWindow>
      </Marker>
  </GoogleMap>
));

export default Map;




