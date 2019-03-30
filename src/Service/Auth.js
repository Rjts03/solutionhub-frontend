/* eslint-disable no-restricted-globals */
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const LOGIN_SUCCESS_URL = '/myquestions';
const LOGIN_FAILURE_URL = '/notfound';

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'dev-rjt-03.auth0.com',
    clientID: '2d3BII1FR87XMyr2SHtBnRXcjFPAbGVE',
    redirectUri: 'http://localhost:3000/auth0-redirect',
    audience: 'https://dev-rjt-03.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  login = () => {
    this.auth0.authorize();
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        location.pathname = LOGIN_FAILURE_URL;
        console.log(err);
      }
    });
  }

  setSession = authResult => {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // navigate to the home route
    location.hash = '';
    location.pathname = LOGIN_SUCCESS_URL;
  }

  getAccessToken = () => {
    return localStorage.getItem('access_token');
  }

  getIdToken = () => {
    return localStorage.getItem('id_token');
  }

  renewSession = () => {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout = () => {
    // Remove tokens and expiry time
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // navigate to the home route
    location.pathname = '/';
  }

  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getProfile = () => {
    if (localStorage.getItem('id_token')) {
      return jwtDecode(localStorage.getItem('id_token'))
    } else {
      return null;
    }
  }
}