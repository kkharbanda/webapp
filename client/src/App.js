import React , { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import Alert from "./components/layout/Alert";
import store from "./store";
import "./App.css";
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
export default function App() {
  
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());
}, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
      
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* 👇️ handle dynamic path */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       
      </Router>
    </Provider>
  );
}
