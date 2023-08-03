import React from 'react';
import './styles/style.css';
import './styles/quiz.css';
import logoBg from './images/logo-bg.png';
import loginSvg from './images/login.svg';

const Login = () => {
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
          <h1>Login to your account</h1>
          <div className="column">
            <div className="illustration">
              <img src={loginSvg} alt="Login" />
            </div>
            <form className="login form" action="#">
              <div className="textInput">
                <input type="text" placeholder="Enter email" />
                <span className="material-icons-outlined">alternate_email</span>
              </div>

              <div className="textInput">
                <input type="password" placeholder="Enter password" />
                <span className="material-icons-outlined">lock</span>
              </div>

              <button className="button">
                <span>Submit now</span>
              </button>

              <div className="info">
                Don't have an account? <a href="Signup">Signup</a> instead.
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
