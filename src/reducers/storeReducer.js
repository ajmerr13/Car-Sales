import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = [
  { id: 1, name: "Garbage to Fuel Converter", price: 3500 },
  { id: 2, name: "Flux Capacitor", price: 2200 },
  { id: 3, name: "Flight Capabilities", price: 3500 },
  { id: 4, name: "Lightning Conductor", price: 250 }
];

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return state.filter(feature => feature.id !== action.payload.id);
    case REMOVE_FEATURE:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default storeReducer;