import React from "react";
import { Link } from "react-router-dom";

const FamilyRoom = ({ family }) => {
  const { picture, name, price } = family;
  return (
    <div className="single_room">
      <img src={picture} alt="" />
      <div className="single_item">
        <h3>{name}</h3>
        <p>Amount: {price}</p>
        <Link className="single_link" to="/orders">
          Book
        </Link>
      </div>
    </div>
  );
};

export default FamilyRoom;
