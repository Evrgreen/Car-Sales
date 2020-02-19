import React from "react";
import { connect } from "react-redux";

import { addItem } from "./actions";

const AdditionalFeature = ({ feature, addItem }) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => addItem(feature.id)} className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mDTP = {
  addItem
};

export default connect(null, mDTP)(AdditionalFeature);
