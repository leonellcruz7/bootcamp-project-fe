import React from "react";
import "./App.scss";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
