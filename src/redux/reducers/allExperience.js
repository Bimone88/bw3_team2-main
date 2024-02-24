import {
  TURN_OFF_SPINNER,
  ALL_EXPERIENCE,
  SINGLE_EXPERIENCE,
  ADD_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
} from "../actions";

const initialState = {
  allExperienceList: [], //* QUI SI SALVANO TUTTE LE ESPERIENZE
  isLoading: true, //* STATO DELLO SPINNER
};

const allExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EXPERIENCE:
      return {
        ...state,
        allExperienceList: action.payload,
      };
    default:
      return state;
  }
};

export default allExperienceReducer;
