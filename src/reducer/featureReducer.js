const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const featureReducer = (state = initialState, action) => {
  let { car, additionalPrice, additionalFeatures } = state;
  const { type, payload } = action;
  console.log({ state, action });
  console.log(payload);
  switch (type) {
    case "ADD_ITEM": {
      const [selectedFeature] = additionalFeatures.filter(
        (item) => item.id == action.payload
      );
      return {
        ...state,
        additionalPrice: (additionalPrice += selectedFeature.price),
        car: {
          ...car,
          features: [...car.features, selectedFeature]
        }
      };
    }
  }
  return state;
};
