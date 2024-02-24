import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile";
import postsReducer from "../reducers/postsReducer"; // Per homepage
import jobsReducer from "../reducers/jobsReducer"; // Reducer per lavori
import allExperienceReducer from "../reducers/allExperience";
import singleExperienceReducer from "../reducers/singleExperience";

const globalReducer = combineReducers({
  profile: profileReducer,
  postsReducer: postsReducer, // per homepage
  jobs: jobsReducer, // per lavoro
  allExperience: allExperienceReducer,
  singleExperience: singleExperienceReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
