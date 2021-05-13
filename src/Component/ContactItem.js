import React from 'react'
import './ContactItem.css';
export default function ContactItem({icon,text1,title}) {
    return (

        <div className="ContactTtem">
        <div className="contact">
            <img src={icon} alt=""/>
            <div className="right-item">
                <h5>{title}</h5>
                <p>{text1}</p>
                <p></p>   
            </div>
            
        </div>
        </div>
    )
}
