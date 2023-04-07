import './App.css';
import Map from './Map.jsx';
import React, {useState} from "react";


function App() {
  const [droneLocation, setDroneLocation] = useState({lat: 52.52855551440561, lng: -1.646643690687584})

  return (
    <div className='App'>
    <div  className='Map'><Map isMarkerShown /></div>
    </div>
  );
}

export default App;