import React, { useEffect, useState } from "react";

const useSingleRooms = () => {
  const [singleRoom, setSingleRoom] = useState([]);

  useEffect(() => {
    fetch("singleRooms.json")
      .then(res => res.json())
      .then(data => setSingleRoom(data));
  }, []);

  return [singleRoom, setSingleRoom] ;
};

export default useSingleRooms;
