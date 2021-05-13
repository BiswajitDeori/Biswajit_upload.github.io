
import React from 'react'
import './ContactItem.css';
import Email from './email.png';
import Map from './map.png';
import Phone from './Phone.png';
 


import ContactItem from './ContactItem';

export default function Contact() {
    return (
       
        <div className="ContactPage">
            <div className="map_sec">

          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609845754!2d72.74109975285948!3d19.082197839427934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620908580824!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowFullScreen="" loading="lazy" style={{border:"0"}}></iframe>
            </div>

            <div className="contact-sec">
                <ContactItem title={'Email'} icon={Email} text1={'biswajit@123hgmail.com'} text2={'biswajit'}/>
                <ContactItem title={'Phone'} icon={Phone} text1={'(91+ 9989891289138'} text2={'biswajit'}/>
                <ContactItem title={'Location'}  icon={Map} text1={'Delhi ,India pincode:44119'} text2={'biswajit'}/>
            </div>
        </div>
    )
}
