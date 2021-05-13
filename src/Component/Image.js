import React from 'react'
import './Image.css';

import logo1 from './Admin3.jpg';
export default function Image() {
    return (
        <div className="ImageSection">
            <div className="Img">
                <img src={logo1}/>

            </div>
            <div className="about-info">
                <h4>I am,<span>Biswajit Deori</span></h4>
                <p>
                    Dil mai ho tum to jinda ho tum
                </p>
                <div className="about-details">
                <div className="name-detail">
                    <p>Full Name :<span>Biswjit Deori</span></p>
                    
                </div>
                <div className="name-detail">
                    <p>age :<span>21</span></p>
                    
                </div>
                <div className="name-detail">
                    <p>gender :<span>Male</span></p>
                    
                </div>
                <div className="name-detail">
                    <p>Address :<span>Assam,guwahati</span></p>
                    
                </div>
                <div className="name-detail">
                    <p>language :<span>English,Hindi,Assamese</span></p>
                    
                </div>
               
                </div>
                <button className="btn">DOWNLOAD CV</button>
            </div>
            
        </div>
    )
}
