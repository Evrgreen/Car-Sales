import React from "react";
import { connect } from "react-redux";

const Total = (props) => {
  const { car, additionalPrice } = props;
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

const mSTP = (state) => state;

export default connect(mSTP)(Total);
