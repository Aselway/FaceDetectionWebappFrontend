import React from 'react';
import './Navigation.css';
const Navigation = ({onRouteChange,route}) =>{
    if(route==='signout')
    return(
        <div>
        <nav className='bar '>
        <a className='but shadow-5 link pointer dim grow dib br3 ma2 tc' href='https://pulkithb.github.io'>My Website</a>
            <a onClick={ () => onRouteChange('signin')} className='but shadow-5 link pointer dim grow dib br3 ma2 tc' >Sign Out</a>
            
        </nav>
        <span className='bar1 '>
        <a className='but1 shadow-5 link pointer dim grow dib br3 ma2 tc' href='https://pulkithb.github.io'>My Website</a>
            <a  onClick={ () => onRouteChange('signin')} className='but1 shadow-5 link pointer dim grow dib br3 ma2 tc'>Sign Out</a>
            
        </span>
    </div>
    );
    else
    return(    
                <div>
                <nav className='bar '>
                <a className='but shadow-5 link pointer dim grow dib br3 ma2 tc' href='https://pulkithb.github.io'>My Website</a>
                <a onClick={ () => onRouteChange('register')} className='but shadow-5 link pointer dim grow dib br3 ma2 tc' >Register</a>
                <a onClick={ () => onRouteChange('signin')} className='but shadow-5 link pointer dim grow dib br3 ma2 tc' >Sign In</a>
                    
                    
                </nav>
                <span className='bar1 '>
                <a className='but1 shadow-5 link pointer dim grow dib br3 ma2 tc' href='https://pulkithb.github.io'>My Website</a>
                <a  onClick={ () => onRouteChange('register')} className='but1 shadow-5 link pointer dim grow dib br3 ma2 tc'>Register</a>
                <a onClick={ () => onRouteChange('signin')} className='but1 shadow-5 link pointer dim grow dib br3 ma2 tc' >Sign In</a>
                    
                    
                </span>
            </div>
    );
}

export default Navigation;