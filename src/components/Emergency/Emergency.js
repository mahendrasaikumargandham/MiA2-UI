import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import "./Emergency.css";
import Header from '../Header/Header';

function Emergency() {
  return (
    <div className = "emergency">
        <Header />
        <div className = "emergency_info">
            <button>Emergency Information</button>
        </div>
        <div className = "emergency_input">
            <input />
            <p><ArrowBackIcon /></p>
        </div>
        <div className = "numberpad">
            <div className = "numberpad1">
                <button><h2>1</h2><p>info</p></button>
                <button><h2>2</h2><p>abc</p></button>
                <button><h2>3</h2><p>def</p></button>
            </div>
            <div className = "numberpad1">
                <button><h2>4</h2><p>ghi</p></button>
                <button><h2>5</h2><p>jkl</p></button>
                <button><h2>6</h2><p>mno</p></button>
            </div>
            <div className = "numberpad1">
                <button><h2>7</h2><p>pqrs</p></button>
                <button><h2>8</h2><p>tuv</p></button>
                <button><h2>9</h2><p>wxyz</p></button>
            </div>
            <div className = "dail">
                <p className = "dail_button"><PhoneIcon /></p>
            </div>
        </div>
    </div>
  )
}

export default Emergency