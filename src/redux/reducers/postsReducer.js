import { GET_POSTS, TURN_OFF_SPINNER } from "../actions";

const initialState = {
  postsList: [],
  isLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        postsList: action.payload,
        isLoading: false,
      };
    case TURN_OFF_SPINNER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
