// import { Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import { useState } from 'react';
// import RefrshHandler from './RefrshHandler';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const PrivateRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/login" />
//   }

//   return (
//     <div className="App">
//       <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
//       <Routes>
//         <Route path='/' element={<Navigate to="/login" />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/home' element={<PrivateRoute element={<Home />} />} />
//       </Routes>
//     </div>
//   );
// }

// 
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";


const App = () => {
  // const navigate = useNavigate();
   return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );

    // navigate("yourdesiredlocation");
  
};


export default App;

const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
// export default App;