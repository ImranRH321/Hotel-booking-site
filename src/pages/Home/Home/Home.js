import React from 'react';
import DoubleRooms from '../DoubleRooms/DoubleRooms';
import FamilyRooms from '../FamilyRooms/FamilyRooms';
import SingleRoom from '../SingleRooms/SingleRooms';

const Home = () => {
    return (
        <div>
            <h2>Home page </h2>
            <SingleRoom></SingleRoom>
            <DoubleRooms></DoubleRooms>
            <FamilyRooms></FamilyRooms>
        </div>
    );
};

export default Home;