import React from "react";
import "./App.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";
import Cookies from "universal-cookie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Feed />} />
          <Route
            path="/profile/:username"
            element={<ProtectedRoute element={<Profile />} />}
          />
          <Route
            path="/create-post"
            element={<ProtectedRoute element={<CreatePost />} />}
          />
          <Route
            path="/edit-post/:postid"
            element={<ProtectedRoute element={<EditPost />} />}
          />
          <Route
            path="/view-post/:postid"
            element={<ProtectedRoute element={<ViewPost />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const ProtectedRoute = ({ element }) => {
  const cookie = new Cookies();
  const current_user = cookie.get("user_id");

  if (current_user) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};
