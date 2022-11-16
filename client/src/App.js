import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import Alert from "./components/layout/Alert";
import store from "./store";
import "./App.css";

export default function App() {
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
