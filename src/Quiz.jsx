import React from 'react';
import './styles/style.css';
import './styles/quiz.css';
import logoBg from './images/logo-bg.png';
import image3 from './images/3.jpg';

const Quiz = () => {
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
          <a href="signup.html">Signup</a>
          {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
        </div>
      </nav>

      <main className="main">
        <div className="container">
          <h1>Pick three of your favorite Star Wars Flims</h1>
          <h4>Question can have multiple answers</h4>

          <div className="answers">
            {/* Option 1 */}
            <label className="answer" htmlFor="option1">
              <input type="checkbox" id="option1" />
              A New Hope 1
            </label>

            {/* Option 2 */}
            <label className="answer" htmlFor="option2">
              <input type="checkbox" id="option2" />
              A New Hope 1
            </label>

            {/* Option 3 */}
            <label className="answer" htmlFor="option3">
              <input type="checkbox" id="option3" />
              A New Hope 1
            </label>

            {/* Option 4 */}
            <label className="answer wrong" htmlFor="option4">
              <input type="checkbox" id="option4" />
              A New Hope 1
            </label>

            {/* Option 5 */}
            <label className="answer" htmlFor="option5">
              <input type="checkbox" id="option5" />
              A New Hope 1
            </label>

            {/* Option 6 */}
            <label className="answer" htmlFor="option6">
              <input type="checkbox" id="option6" />
              A New Hope 1
            </label>

            {/* Option 7 */}
            <label className="answer correct" htmlFor="option7">
              <input type="checkbox" id="option7" />
              A New Hope 1
            </label>

            {/* Option 8*/}
            <label className="answer" htmlFor="option8">
              <input type="checkbox" id="option8" />
              A New Hope 1
            </label>

            {/* Option 9 */}
            <label className="answer" htmlFor="option9">
              <input type="checkbox" id="option9" />
              A New Hope 1
            </label>

            {/* Option 10 */}
            <label className="answer" htmlFor="option10">
              <input type="checkbox" id="option10" />
              A New Hope 1
            </label>
          </div>

          <div className="progressBar">
            <div className="backButton">
              <span className="material-icons-outlined">arrow_back</span>
            </div>
            <div className="rangeArea">
              <div className="tooltip">24% Complete!</div>
              <div className="rangeBody">
                <div className="progress" style={{ width: '20%' }}></div>
              </div>
            </div>
            <a href="QuizResult">
              <button className="button next">
                <span>Next Question</span>
                <span className="material-icons-outlined">arrow_forward</span>
              </button>
            </a>
          </div>

          <div className="miniPlayer floatingBtn">
            <span className="material-icons-outlined open">play_circle_filled</span>
            <span className="material-icons-outlined close">close</span>
            <img src={image3} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
