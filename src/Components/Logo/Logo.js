import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png';
const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt shadow-5 br2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa3 tc"> <img style={{padding:'5px'}} src={brain} alt='Not Available'/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;