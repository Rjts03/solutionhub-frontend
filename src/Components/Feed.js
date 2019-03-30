import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../Actions/questions';

const Feed = props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(props)
    props.dispatch(fetchQuestions());
  }, []);

  useEffect(() => {
    setData(props.questions);
  }, [props.questions])
  
  return (
    <div>
      {data ? data[0].question : 'loading...'}
    </div>
  )
}

const mapStateToProps = state => ({
  questions: state.questions,
  fetching: state.fetching
});

export default connect(mapStateToProps)(Feed);