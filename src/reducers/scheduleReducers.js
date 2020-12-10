/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_SCHEDULES, GET_RESUME_URL } from "../actions/types";
// auth reducers
const intialState = {
  schedules: {},
  resumeUrl: ''
};

// reducer
export default function(state = intialState, action){
  switch(action.type){
    case GET_ALL_SCHEDULES:
      return {
        ...state,
        schedules: action.payload
      }
    case GET_RESUME_URL: {
      return {
        ...state,
        resumeUrl: action.payload
      }
    }
    default:{
      return state
    }
  }
}