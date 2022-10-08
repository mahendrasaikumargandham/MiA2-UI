import React from 'react'
import "./Home.css";
import Header from '../Header/Header';
import instagram from "./images/instagram.svg";
import phone from "./images/phone-solid.svg";
import discord from "./images/discord.svg";
import play from "./images/google-play.svg";
import chrome from "./images/chrome.svg";
import camera from "./images/camera-solid.svg";
import google from "./images/google.svg";
import mic from "./images/microphone-solid.svg";

function Home() {
  return (
    <div className='home'>
      <Header />
      <div className = "home-screen">

      </div>
      <div className = "home-icons">
        <img src = {phone} alt = '' />
        <img src = {discord} alt = '' />
        <img src = {play} alt = '' />
        <img src = {chrome} alt = '' />
        <img className = "insta" src = {instagram} alt = '' />
      </div>
      <div className = "home-search">
        <div className = "home-search-left">
          <img src = {google} alt = '' />
        </div>
        <div className = "home-search-right">
          <img src = {mic} alt = '' />
          <img src = {camera} alt = '' />
        </div>  
      </div>
    </div>
  )
}

export default Home