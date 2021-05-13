import React from 'react';
import './Home.css';
import A from './admin2.jpg';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="HomePage">
            <header className="hero">
                <div className="leader">
                    <img src={A} alt="photo_2"/>
                </div>
                <h1 className="hero-text">
                    Biswajit Deori
                    <br></br>
                    <span>Full stack web Developer</span>
                </h1>
                <p>
                   mobile application/pc Games/Compitative coder
                </p>

                <div className="icons" >
<Link className="icon-holder">
<FontAwesomeIcon icon={faFacebook} className="icon fb"/>
</Link>
<Link className="icon-holder">
<FontAwesomeIcon icon={faGithub} className="icon gt"/>
</Link>
<Link className="icon-holder">
<FontAwesomeIcon icon={faInstagram} className="icon in"/>
</Link>
<Link className="icon-holder">
<FontAwesomeIcon icon={faYoutube} className="icon yt"/>
</Link>
                </div>
            </header>
        </div>
    )
}
