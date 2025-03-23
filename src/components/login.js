import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  function handleLogin() {
    
    if (creds.username === 'admin' && creds.password === '123') {
      onLogin && onLogin({ username: creds.username });
      navigate('/stats');
    } else {
      alert('Нэвтрэх нэр эсвэл нууц үг буруу байна!');
    }
  }

  return (
    <div style={{ padding: 50}}>
      <br />
      <span>Username:</span><br />
      <input
        type="text"
        value={creds.username}
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
      /><br />
      <span>Password:</span><br />
      <input
        type="password"
        value={creds.password}
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
