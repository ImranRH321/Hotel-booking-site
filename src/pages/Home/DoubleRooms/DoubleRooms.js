import React from "react";
import useDoubleRooms from "../../../hooks/useDoubleRooms";
import DoubleRoom from "../DobleRoom/DoubleRoom";

const DoubleRooms = () => {
  const [doubleRooms, setDoubleRooms] = useDoubleRooms();

  return (
    <div className="container">
      <h1 className="single_title_rooms">Double rooms {doubleRooms.length}</h1>
      <div className="single_rooms_container">
    {doubleRooms.map(double => (
        <DoubleRoom double={double} key={double.id}></DoubleRoom>
      ))}
    </div>
    </div>
  );
};

export default DoubleRooms;
