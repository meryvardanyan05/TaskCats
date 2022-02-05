import React from 'react';
import img from '../img/cat.png'


export default function Heading(){
    return(
        <div className='heading'>
            <div className='logoContainer'>
                    <a href="/">
                        <img className="logo" src={img} />
                    </a>
            </div>
            <div className='headingText'>
                <span> Cat lovers</span>
            </div>
        </div>
    )
}