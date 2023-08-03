import React from 'react';
import './styles/style.css';
import './styles/result.css';
import './styles/quiz.css';
import logoBg from './images/logo-bg.png';
import successImg from './images/success.png';

const QuizResult = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/" className="brand">
              <img src={logoBg} alt="Learn with Sumit Logo" />
              <h3>Learn More</h3>
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
        {/* First Row */}
        <div className="container">
          <div className="summary">
            <div className="point">
              {/* progress bar will be placed here */}
              <p className="score">
                Your score is <br />
                5 out of 10
              </p>
            </div>

            <div className="badge">
              <img src={successImg} alt="Success" />
            </div>
          </div>

          <div className="analysis">
            <h1>Question Analysis</h1>
            <h4>You answered 5 out of 10 questions correctly</h4>

            <div className="question">
              <div className="qtitle">
                <span className="material-icons-outlined">help_outline</span>
                Here goes the question from Learn with Sumit?
              </div>
              <div className="answers">
                {/* Option 1 */}
                <label className="answer" htmlFor="option1">
                  A New Hope 1
                </label>

                {/* Option 2 */}
                <label className="answer" htmlFor="option2">
                  A New Hope 1
                </label>

                {/* Option 3 */}
                <label className="answer" htmlFor="option3">
                  A New Hope 1
                </label>

                {/* Option 4 */}
                <label className="answer wrong" htmlFor="option4">
                  <span>A New Hope 1</span>
                  <span>Your answer</span>
                </label>

                {/* Option 5 */}
                <label className="answer" htmlFor="option5">
                  A New Hope 1
                </label>

                {/* Option 6 */}
                <label className="answer" htmlFor="option6">
                  A New Hope 1
                </label>

                {/* Option 7 */}
                <label className="answer correct" htmlFor="option7">
                  <span>A New Hope 1</span>
                  <span>Correct answer</span>
                </label>

                {/* Option 8*/}
                <label className="answer" htmlFor="option8">
                  A New Hope 1
                </label>

                {/* Option 9 */}
                <label className="answer" htmlFor="option9">
                  A New Hope 1
                </label>

                {/* Option 10 */}
                <label className="answer" htmlFor="option10">
                  A New Hope 1
                </label>
              </div>
            </div>

            <div className="question">
              <div className="qtitle">
                <span className="material-icons-outlined">help_outline</span>
                Here goes the question from Learn with Sumit?
              </div>
              <div className="answers">
                {/* Option 1 */}
                <label className="answer" htmlFor="option1">
                  A New Hope 1
                </label>

                {/* Option 2 */}
                <label className="answer" htmlFor="option2">
                  A New Hope 1
                </label>

                {/* Option 3 */}
                <label className="answer" htmlFor="option3">
                  A New Hope 1
                </label>

                {/* Option 4 */}
                <label className="answer wrong" htmlFor="option4">
                  <span>A New Hope 1</span>
                  <span>Your answer</span>
                </label>

                {/* Option 5 */}
                <label className="answer" htmlFor="option5">
                  A New Hope 1
                </label>

                {/* Option 6 */}
                <label className="answer" htmlFor="option6">
                  A New Hope 1
                </label>

                {/* Option 7 */}
                <label className="answer correct" htmlFor="option7">
                  <span>A New Hope 1</span>
                  <span>Correct answer</span>
                </label>

                {/* Option 8*/}
                <label className="answer" htmlFor="option8">
                  A New Hope 1
                </label>

                {/* Option 9 */}
                <label className="answer" htmlFor="option9">
                  A New Hope 1
                </label>

                {/* Option 10 */}
                <label className="answer" htmlFor="option10">
                  A New Hope 1
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizResult;
