import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import user_icon from '../src/User.png.png';
import email_icon from '../src/email.png.png';
import password_icon from '../src/password.png.png';

export const Login = () => {
  const [action, setAction] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const url = "http://localhost:8080/api/v1/login";
    const payload = { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const message = await response.text();
      console.log("Login response:", message);
      if (message === "Login successful!") {
        navigate('/');
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error("Error during login request:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const url = "http://localhost:8080/api/v1/register";
    const payload = { username, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const message = await response.text();
      console.log("SignUp response:", message);
      alert(message);
      if (message === "User registered successfully!") {
        setAction("Login");
        setIsFormVisible(false);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error("Error during sign-up request:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleActionClick = (actionType) => {
    setAction(actionType);
    setErrorMessage("");
    setIsFormVisible(true);
  };

  const handleSubmit = () => {
    if (action === "Login") {
      handleLogin();
    } else if (action === "Sign Up") {
      handleSignUp();
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {isFormVisible && (
        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {!isFormVisible && (
        <div className="submit-container">
          <div className="submit" onClick={() => handleActionClick("Login")}>
            Login
          </div>
          <div className="submit" onClick={() => handleActionClick("Sign Up")}>
            Sign Up
          </div>
        </div>
      )}
      {isFormVisible && (
        <div className="submit-container">
          <div className="submit primary" onClick={handleSubmit}>
            {action}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
