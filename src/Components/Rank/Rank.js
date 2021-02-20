import React from 'react';
import './Rank.css';
const Rank = ({name,entries}) => {
    return(
        <div className='tc washed-yellow pa5'>
            <div className='greeting'>
                {'Welcome '}<b>{name}</b>{', your current entry number is '}
                
            </div>
            <div className='score'>
                <b>{entries}</b>
            </div> 
        </div>
    )
}

export default Rank;