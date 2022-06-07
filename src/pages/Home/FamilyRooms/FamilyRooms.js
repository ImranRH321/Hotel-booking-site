import React from "react";
import useFamilyRooms from "../../../hooks/useFamilyRooms";
import FamilyRoom from "../FamilyRoom/FamilyRoom";

const FamilyRooms = () => {
  const [familyRooms, setFamilyRooms] = useFamilyRooms();
  return (
    <div className="container">
      <h2 className="single_title_rooms">
        family rooms ..{familyRooms.length}
      </h2>

      <div className="single_rooms_container">
        {familyRooms.map(family => (
          <FamilyRoom family={family} key={family.id}></FamilyRoom>
        ))}
      </div>
    </div>
  );
};

export default FamilyRooms;
