import React from "react";
import { connect } from "react-redux";

const Header = (car) => {
  const { name, image, price } = car;
  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};
const mSTP = ({ car }) => car;

export default connect(mSTP, {})(Header);
