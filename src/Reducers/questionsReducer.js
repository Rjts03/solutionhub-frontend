const initialState = {
  fetching: false,
  questions: null,
  error: null
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      return {...state, fetching: true}
    case 'FETCH_QUESTIONS_FULFILLED':
      return {...state, fetching: false, questions: action.payload}
    case 'FETCH_QUESTIONS_REJECTED':
      return {...state, fetching: false, error: action.payload}
    default:
      return state;
  }
}