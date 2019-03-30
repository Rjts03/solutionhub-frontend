import React, { useEffect } from 'react';
import Auth from './Auth';

const RedirectPage = () => {

  useEffect(() => {
    const auth = new Auth();
    auth.handleAuthentication();
  }, [])

  return (
    <div>
      loading...  
    </div>
  );
}

export default RedirectPage;
