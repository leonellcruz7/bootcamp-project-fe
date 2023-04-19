import React from "react";
import "./App.scss";
import "remixicon/fonts/remixicon.css";
import PostCard from "./components/PostCard";
import TagsCard from "./components/TagsCard";

function App() {
  return (
    <div className="App p-10">
      <TagsCard />
    </div>
  );
}

export default App;
