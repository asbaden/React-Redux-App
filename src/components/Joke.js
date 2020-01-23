import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { StyledJoke } from "../styles/StyledJoke"

import { fetchJoke } from '../actions';

const Joke = props => {
  console.log("this is props in Joke", props)  
  
  return (
      <StyledJoke>
        <h1> Our Lord and Savior Chuck Norris</h1>
        <button onClick={props.fetchJoke}>Click Here</button>
        {!props.joke && !props.isLoading && (
          <h2>Click to learn about Chuck Norris!</h2>
        )}
        {props.isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {props.joke && !props.isLoading && <h2>{props.joke.value.joke}</h2>}
        
      </StyledJoke>
    );
  };
  
  const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      joke: state.joke,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchJoke }
  )(Joke);