import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/singleRooms'>SingleRoom</Link>
            <Link className='link' to='/doubleRooms'>DoubleRooms</Link>
            <Link className='link' to='/familyRooms'>FamilyRooms</Link>
            <Link className='link' to='/login'>Login</Link>
        </nav>
        </div>
    );
};

export default Header;