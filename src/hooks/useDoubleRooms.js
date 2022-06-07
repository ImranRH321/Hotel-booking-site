import React, { useEffect, useState } from "react";

const useDoubleRooms = () => {
  const [doubleRooms, setDoubleRooms] = useState([]);

  useEffect(() => {
    fetch("doubleRooms.json")
      .then(res => res.json())
      .then(data => setDoubleRooms(data));
  }, []);

  return [doubleRooms, setDoubleRooms];
};

export default useDoubleRooms;
