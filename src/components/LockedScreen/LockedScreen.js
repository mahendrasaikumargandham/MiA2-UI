import React from 'react'
import Header from '../Header/Header'
import HttpsIcon from '@mui/icons-material/Https';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import "./LockedScreen.css";
import { Link } from 'react-router-dom';

function LockedScreen() {
  return (
    <div className = "lockedscreen">
        <Header />
        <div className = "lockedscreen-lock">
            <p><HttpsIcon /></p>
        </div>
        <div className = "lockedscreen-data">
            <h2>12:00</h2>
            <h4>Sat, 8 Oct</h4>
            <h4>mahendra gandham</h4>
        </div>
        <div className = "lockscreen-unlock">
            <Link to = "/home"><h4>Click to unlock</h4></Link>
        </div>
        <div className = "lockedscreen-bottom">
            <p><MicNoneIcon /></p>
            <Link to = "/emergency"><h4>emergency</h4></Link>
            <p><PhotoCameraIcon /></p>
        </div>
    </div>
  )
}

export default LockedScreen