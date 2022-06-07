import React from 'react';
import useSingleRooms from '../../../hooks/useSingleRooms';
import SingleRoom from '../SingleRoom/SingleRoom';
import './SingleRooms.css'

const SingleRooms = () => {
    const [singleRooms, setSingleRoom] = useSingleRooms()
    return (
        <div className='container'>
            <h2 className='single_title_rooms'>single room {singleRooms.length}</h2>
             
             <div className="single_rooms_container">
             {
                   singleRooms.map(single=> <SingleRoom single={single} key={single.id}></SingleRoom>)
               }
             </div>
                    
        </div>
    );
};

export default SingleRooms;  