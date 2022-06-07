import React, { useEffect, useState } from 'react';

const useFamilyRooms = () => {
    const [familyRooms, setFamilyRooms] = useState([]);

    useEffect(() => {
      fetch("familyRooms.json")
        .then(res => res.json())
        .then(data => setFamilyRooms(data));
    }, []);
  
    return [familyRooms, setFamilyRooms];
}
export default useFamilyRooms;