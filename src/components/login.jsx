import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ onLogin }) {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Нэвтрэх үйлдэл
  const handleLogin = async (e) => {
    e.preventDefault();  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', creds); 

      // Хариуг амжилттай авсан тохиолдолд
      const { token } = response.data;
      localStorage.setItem('token', token); 
      
      onLogin && onLogin({ username: creds.username });
      navigate('/market');  
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Нэвтрэх нэр эсвэл нууц үг буруу байна!');
      } else {
        setErrorMessage('Серверийн алдаа гарлаа.');
      }
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <form onSubmit={handleLogin}>
        <br />
        <span>Username:</span>
        <br />
        <input
          type="text"
          value={creds.username}
          onChange={(e) => setCreds({ ...creds, username: e.target.value })}
        />
        <br />
        <span>Password:</span>
        <br />
        <input
          type="password"
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <br />
        <br />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}  
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
