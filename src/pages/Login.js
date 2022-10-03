import React from 'react'
import LoginButton from '../components/Buttons/LoginButton'

const Login = () => {

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;
  
  const scope = 'user-read-private user-read-email';
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&scope=${scope}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return (
    <div>
        <LoginButton onClick={handleLogin}/>
    </div>
  )
}

export default Login