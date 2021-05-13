 import React from 'react'
 import './ServiceSection.css';
 import logo1 from './hack1.png';

 export default function ServiceSection({title,text}) {
     return (
         <div>
             <div className="ServiceSection">
                 <div className="service">
                     <img src={logo1} alt="background"/>
                     <h5 className="s-title">{title}</h5>
                     <p className="s-text">{text} </p>
                 </div>
             </div>
         </div>
     )
 }
 