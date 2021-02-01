import React from 'react';
import './FaceRecognition.css'
const FaceRecognition = ({box,imageUrl}) =>{
    return(
        <div className='tc pa5 center ma'>
            <div className='absolute mt2'>
                 <img className='tc image' id='inputimage' src={imageUrl} alt='Not Found' style={{width:'500px',height:'500px'}}/>
                 <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
            </div>
            
            
        </div>
    );
}

export default FaceRecognition;