import React from "react";
import "../Stylesheet/Sign-in.css";
import signInImage from "../assets/images/ImgSign.svg";
import Navbar from "../components/Layout/Navbar";
import { Link } from "react-router-dom";

const InputFields = ({ type, placeholder }) => (
  <input type={type} className="signin-input" placeholder={placeholder} />
);

const Signin = () => {
  return (
    <div>
      <Navbar />
      <div className="signin-wrapper">
        <div className="signin-card">
          <div className="signin-left">
            <h2>Sign in</h2>
            <p className="signin-subtext">
              Don’t have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign up here
              </Link>
            </p>

            <form className="signin-form">
              <InputFields type="email" placeholder="Enter your email here" />
              <InputFields
                type="password"
                placeholder="Enter your password here"
              />

              <label className="checkbox-label">
                <input type="checkbox" />
                Remember me
              </label>

              <button type="submit" className="signin-submit">
                Login
              </button>
            </form>
          </div>

          <div className="signin-right">
            <img
              src={signInImage}
              alt="Sign in illustration"
              className="signin-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
