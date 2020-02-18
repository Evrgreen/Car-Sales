import React from "react";
import connect from "react-redux";

import { addItem } from "./actions";

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mDTP = {
  addItem
};

export default connect(null, mDTP)(AdditionalFeature);
