import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './Home'
import Signup from './Signup'
import Quiz from './Quiz'
import QuizResult from './QuizResult'
import Login from './Login'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
    
  },
  {
    path: "Signup/",
    element: <Signup/>
    
  },
  {
    path: "Login/",
    element: <Login/>
    
  },
  {
    path: "Quiz/",
    element: <Quiz/>
    
  },
  {
    path: "QuizResult/",
    element: <QuizResult/>
    
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
