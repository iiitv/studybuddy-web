import React from 'react';
import './Background.css';
import Image from '../Assets/main-01.png'; 
const background = () => {
    return (
        <div className="Background">
            <div className="centre">
                <h1 className="text">SOSHIKI ORG</h1>
                <img className="Img" src={Image} alt="WebImage" />
            </div>
        </div>
       
       )
};
export default background;