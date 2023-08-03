import React from 'react';
import './styles/style.css';
import './styles/quiz.css';
import logoBg from './images/logo-bg.png';
import signupSvg from './images/signup.svg';

const Signup = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" className="brand">
              <img src={logoBg} alt="Learn with Sumit Logo" />
              <h3>Learn English</h3>
            </a>
          </li>
        </ul>
        <div className="account">
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="Signup">Signup</a>
          {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
        </div>
      </nav>

      <main className="main">
        <div className="container">
          <h1>Create an account</h1>
          <div className="column">
            <div className="illustration">
              <img src={signupSvg} alt="Signup" />
            </div>
            <form className="signup form" action="#">
              <div className="textInput">
                <input type="text" placeholder="Enter name" />
                <span className="material-icons-outlined"> person </span>
              </div>

              <div className="textInput">
                <input type="text" placeholder="Enter email" />
                <span className="material-icons-outlined"> alternate_email </span>
              </div>

              <div className="textInput">
                <input type="password" placeholder="Enter password" />
                <span className="material-icons-outlined"> lock </span>
              </div>

              <div className="textInput">
                <input type="password" placeholder="Confirm password" />
                <span className="material-icons-outlined"> lock_clock </span>
              </div>

              <label>
                <input type="checkbox" />
                <span>I agree to the Terms & Conditions</span>
              </label>

              <div className="button">
                <span>Submit now</span>
              </div>

              <div className="info">
                Already have an account? <a href="Login">Login</a> instead.
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
