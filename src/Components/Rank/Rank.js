import React from 'react';

const Rank = ({name,entries}) => {
    return(
        <div className='tc washed-yellow pa5'>
            <div className=' f2 '>
                {'Welcome '+ name +', your current entry number is...'}
            </div>
            <div className=' f1'>
                <b>{entries}</b>
            </div>
        </div>
    )
}

export default Rank;