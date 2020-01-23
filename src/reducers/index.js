import {
    FETCHING_JOKE_START,
    FETCHING_JOKE_SUCCESS,
    FETCHING_JOKE_FAILURE
  } from '../actions';


const initialState = {
    isLoading: false,
    joke: null,
    error: ''
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_JOKE_START:
        return {
          ...state,
          isLoading: true
        };
      case FETCHING_JOKE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          joke: action.payload
        };
      default:
        return state;
    }
  };


  