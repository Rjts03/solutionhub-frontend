import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('called')
    fetch('http://localhost:8080/route/question')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(e => console.warn(e));
  }, []);
  return (
    <div>
      {data && data[0].question}
    </div>
  )
}
export default Feed;