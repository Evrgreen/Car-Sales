import React from "react";

import { connect } from "react-redux";
import { removeItem } from "./actions";
const AddedFeature = ({ feature, removeItem }) => {
  return (
    <li>
      <button onClick={() => removeItem(feature.id)} className="button">
        X
      </button>
      {feature.name}
    </li>
  );
};

const mDTP = {
  removeItem
};

export default connect(null, mDTP)(AddedFeature);
