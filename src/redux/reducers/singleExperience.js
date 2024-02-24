import { TURN_OFF_SPINNER, ALL_EXPERIENCE, SINGLE_EXPERIENCE, ADD_EXPERIENCE, UPDATE_EXPERIENCE, DELETE_EXPERIENCE } from "../actions";

const initialState = {
  singleExperience: null, //* QUI SI SALVANO LE SINGOLE ESPERIENZE
  isLoading: true, //* STATO DELLO SPINNER
};

const singleExperienceReducer = (state = initialState, action) => {
    switch (action.type) {
      case SINGLE_EXPERIENCE:
        return {
          ...state,
          singleExperience: action.payload,
        };
      case ADD_EXPERIENCE:
        return {
            ...state,
            singleExperience: action.payload,
          };
      case UPDATE_EXPERIENCE:
        return {
            ...state,
            singleExperience: action.payload,
          };
      case DELETE_EXPERIENCE:
        return {
            ...state,
            singleExperience: null,
          };
      default:
        return state;
    }
  };
  

export default singleExperienceReducer;