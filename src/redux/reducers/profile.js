import {
  PERSONAL_PROFILE,
  TURN_OFF_SPINNER,
  ALL_PROFILE,
  PERSONAL_PROFILE_MODIFIED,
} from "../actions";

const initialState = {
  allProfileList: [], //* QUI SI SALVANO TUTTI I PROFILI
  profileDettagli: null, //* QUI SI SALVANO I DATI DEL NOSTRO POFILO
  isLoading: true, //* STATO DELLO SPINNER
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_PROFILE:
      return {
        ...state,
        profileDettagli: action.payload,
      };

    case TURN_OFF_SPINNER:
      return {
        ...state,
        isLoading: false,
      };
    case ALL_PROFILE:
      return {
        ...state,
        allProfileList: action.payload,
      };
    case PERSONAL_PROFILE_MODIFIED:
      return {
        ...state,
        profileDettagli: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
