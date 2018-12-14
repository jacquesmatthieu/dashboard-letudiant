import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
import Login from '../modules/login.components';

class Oauth extends Component {
  render() {
    return (
      <OauthSender
        authorizeUrl="https://www.dropbox.com/oauth2/authorize"
        clientId={process.env.CLIENT_ID}
        redirectUri="https://www.yourapp.com/auth/dropbox"
        state={{ from: '/settings' }}
        render={({ url }) => <Login />}
      />
    );
  }
}

export default Oauth;