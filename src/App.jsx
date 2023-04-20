import React from "react";
import "./App.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
