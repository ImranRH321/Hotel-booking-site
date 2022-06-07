import React from 'react';
import DoubleRooms from '../DoubleRooms/DoubleRooms';
import SingleRoom from '../SingleRooms/SingleRooms';

const Home = () => {
    return (
        <div>
            <h2>Home page </h2>
            <SingleRoom></SingleRoom>
            <DoubleRooms></DoubleRooms>
        </div>
    );
};

export default Home;