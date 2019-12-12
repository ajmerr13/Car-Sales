import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
  price: 68896,
  name: "1982 Delorean Time Machine",
  image:
    "https://e3sparkplugs.com/media/post/delorean-dmc-12-back-to-the-51411.jpg",
  features: []
};

const carReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FEATURE: 
      return{
        ...state,
        features: [...state.features, action.payload]
      }
    case REMOVE_FEATURE:
      return{
        ...state,
        features: state.features.filter(feature => feature.id !== action.payload.id)
      } 
    default:
      return state;
  }
}

export default carReducer; 