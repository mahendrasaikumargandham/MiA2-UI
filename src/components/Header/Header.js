import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import NetworkCellIcon from '@mui/icons-material/NetworkCell';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import "./Header.css";

function Header() {
  return (
    <div className = "header">
        <div className = "container_top_left">
            Jio 4G
        </div>
        <div className = "container_top_right">
            <div className = "container_top_right_icons">
                <p><AccessAlarmIcon /></p>
                <p><WifiTetheringIcon /></p>
                <p><NetworkCellIcon /></p>
            </div>
            <div className = "charge">
                <p><Battery4BarIcon /></p> 
                <h4>50%</h4>
            </div>
        </div>
    </div>
  )
}

export default Header