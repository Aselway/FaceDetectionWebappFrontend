import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onchange,onclickdetect}) =>{
    return(
        <div className='tc pa1'>
            <p className='f3 white'>{'Enter the image address to detect face....'}</p>
            <div className='center '>
                <div className='br3 shadow-5 pa3 form center'>
                <input className='f4 pa2 ma2 w-70 center' type='tex' onChange={onchange} />
                <button className='dim grow detect tc' onClick={onclickdetect}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;