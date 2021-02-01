import React from 'react';

const Navigation = ({onRouteChange,route}) =>{
    if(route==='signout')
    return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick={ () => onRouteChange('signin')}><a className='f4 pointer pa3 dim black grow underline link m1 tc white' ><b>Sign Out</b></a></p>
                    <p><a href='https://pulkithb.github.io' className='f4 pointer pa3 dim black grow underline link m1 tc white'><b>My Website</b></a></p>
        </nav>
    );
    else
    return(    
                <nav style={{display:'flex',justifyContent:'flex-end'}}>
                    <p onClick={ () => onRouteChange('signin')}><a className='f4 pointer pa3 dim black grow underline link m1 tc white' ><b>Sign In</b></a></p>
                    <p onClick={ () => onRouteChange('register')}><a className='f4 pointer pa3 dim black grow underline link m1 tc white' ><b>Register</b></a></p>
                    <p><a href='https://pulkithb.github.io' className='f4 pointer pa3 dim black grow underline link m1 tc white'><b>My Website</b></a></p>
                </nav>
    );
}

export default Navigation;