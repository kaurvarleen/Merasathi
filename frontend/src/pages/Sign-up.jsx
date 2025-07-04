import { useState } from "react";
import signUpImg from "../assets/images/ImgSign.svg";
import "../Stylesheet/Sign-up.css";
import Navbar from "../components/Layout/Navbar";
import { Link } from 'react-router-dom'

const Signup = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log(credentials);
  };

  const isFormValid =
    credentials.userName.trim() !== "" &&
    credentials.userEmail.trim() !== "" &&
    credentials.userPassword.trim() !== "";

  return (
    <div>
      <Navbar />
      <div className="signup-wrapper">
        <div className="signup-card">
          <div className="signup-left">
            <h2>Sign up</h2>
            <p className="signup-subtext">
              Already have account?{" "}
              <Link to="/signin" className="login-link">
                SignIn
              </Link>
            </p>

            <form onSubmit={(e) => handleSubmit(e)} className="signup-form">
              <input
                type="text"
                name="userName"
                placeholder="your name"
                value={credentials.userName}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    userName: e.target.value,
                  }))
                }
                className="signup-input"
                required
                autoComplete="name"
              />
              <input
                type="email"
                name="userEmail"
                placeholder="your email"
                value={credentials.userEmail}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    userEmail: e.target.value,
                  }))
                }
                className="signup-input"
                required
                autoComplete="email"
              />
              <input
                type="password"
                name="userPassword"
                placeholder="create your password"
                value={credentials.userPassword}
                onChange={(e) =>
                  setCredentials((prev) => ({
                    ...prev,
                    userPassword: e.target.value,
                  }))
                }
                className="signup-input"
                required
                autoComplete="current-password"
              />

              <label className="checkbox-label">
                <input type="checkbox" name="remember" />
                By signing up you agree to receive updates and special offers.
              </label>

              <button
                disabled={!isFormValid}
                type="submit"
                className={`${
                  isFormValid ? "signup-submit" : "signup-inavlid"
                } `}
              >
                Submit
              </button>
            </form>
          </div>

          <div className="signup-right">
            <img
              src={signUpImg}
              alt="Sign up illustration"
              className="signup-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
