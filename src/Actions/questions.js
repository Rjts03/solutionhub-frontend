import axios from "axios";

export function fetchQuestions() {
  return function(dispatch) {
    axios.get('http://localhost:8080/route/question')
    .then(response => {
      dispatch({type: 'FETCH_QUESTIONS_FULFILLED', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'FETCH_QUESTIONS_REJECTED', payload: error})
    });
  }
}