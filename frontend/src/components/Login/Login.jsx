import { useState } from "react";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="signin-container">
      <h2>LogIn</h2>
      <div className="input-group">
        <input type="text" placeholder="Enter Username" className="input-field" />
      </div>

      <div className="input-group">
        <input type="password" className="input-field" placeholder="Enter Password" />
      </div>

      <div>
        <button className="login-button">Log In</button>
      </div>
    </div>
  );
}

export default Login;

