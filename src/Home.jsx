import React from 'react';
import './styles/style.css';
import './styles/grid-list.css';
import logoBg from './images/logo-bg.png';
import image3 from './images/3.jpg';
// import Signup from'./signup.html'
// import Login from './login.html'

const Home = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="./" className="brand">
              <img src={logoBg} alt="Learn English" />
              <h3>Learn English</h3>
            </a>
          </li>
        </ul>
        <div className="account">
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <a href="Signup">Signup</a>
        </div>
      </nav>

      <main className="main">
        <div className="container">
          <div className="videos">
            <a href="quiz">
              <div className="video">
                <img src={image3} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className="qmeta">
                  <p>10 Questions</p>
                  <p>Score : Not taken yet</p>
                </div>
              </div>
            </a>

            {/* Add other video elements here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
