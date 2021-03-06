import React from "react";
import AdditionalFeature from "./AdditionalFeature";

import { connect } from "react-redux";

const AdditionalFeatures = ({ additionalFeatures }) => {
  console.log(additionalFeatures.length);
  console.log(additionalFeatures);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mSTP = ({ additionalFeatures }) => {
  console.log(additionalFeatures);
  return { additionalFeatures };
};

export default connect(mSTP, {})(AdditionalFeatures);
