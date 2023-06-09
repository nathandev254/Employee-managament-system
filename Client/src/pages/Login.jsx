import React from "react";
import "./Login.css";
import signin from "../assets/signin.svg";

function Login() {
  return (
    <div className="Login--page">
      <div className="login">
        <h1>Welcome Back</h1>
        <a href="#" className="login--google">Login with Google</a>
        <p>login with email</p>
        <form action="">
          <input type="email" name="" id="" placeholder="your email" />
          <input type="password" name="" id="" placeholder="password" />
          <input type="password" name="" id="" placeholder="confirmpassword" />
          <div className="checkbox-container">
            <div className="check-box">
              <input type="checkbox" id="remember" name="remember" />
              <span>Remember Me</span>
            </div>
            <div>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
        <div className="signup">
            <span>dont you have an account yet</span>
            <a href="#">signup</a>
        </div>
      </div>
      <div className="login--illustrator">
        <img src={signin} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Login;
