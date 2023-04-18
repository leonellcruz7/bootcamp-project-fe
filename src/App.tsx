import React, { useState } from "react";
import "./App.scss";
import Input from "./components/assets/Input";

function App() {
  const [val, setVal] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
    console.log(e.target.value);
  };
  return <div className="App p-10"></div>;
}

export default App;
