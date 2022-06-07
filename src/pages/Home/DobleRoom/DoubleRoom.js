import React from 'react';
import { Link } from 'react-router-dom';

const DoubleRoom = ({double}) => {
    const {picture, name, price} = double;
    return (
        <div className='single_room'> 
        <img src={picture} alt="" />
        <div className="single_item">
        <h3>{name}</h3>
        <p>Amount: {price}</p>
        <Link className='single_link' to='/order'>Book</Link>
        </div>
    </div>
    );
};

export default DoubleRoom;