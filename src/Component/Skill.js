import React from 'react'
import './Skill.css';
export default function Skill({sill,progress}) {
    return (
        <div>
            <div className="SkillSection">
                <div className="Skill-container">
                    <h5 className="Skil-title">{sill}</h5>
                    <div className="Skill-bar">
                        <p className="Skill-text">{progress} 
                            </p> 
                            <div className="Skill-progress">
                             <div className="progress">
                                 <div className="inner-progress" style={{width:progress}}></div>
                             </div>
                            </div>

       
                    
                        </div>
                    </div>
                </div>
            </div>
       
    )
}
