import React, { useState } from "react";
import Input from "../../components/assets/Input";
import MG from "../../assets/images/MGBackground.svg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex">
      <div className="w-full h-[100vh] overflow-hidden bg-red">
        <img className="w-full" src={MG} alt="" />
      </div>
      <div className="w-full h-[100vh] bg-white p-10">
        <div className="text-right">
          <p className="text-sm font-light">
            Already a member?{" "}
            <a href="/login" className="text-sm">
              Signup{" "}
            </a>
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="max-w-[360px] w-full flex flex-col">
            <p className="text-lg font-medium">Login</p>
            <div className="flex flex-col gap-6 mt-6">
              <Input
                value={email}
                placeholder=""
                label="Email"
                error="test"
                type="text"
                onChange={handleEmail}
                showError={false}
              />
              <Input
                value={username}
                placeholder=""
                label="Username"
                error="test"
                type="text"
                onChange={handleUsername}
                showError={false}
              />{" "}
              <Input
                value={password}
                placeholder=""
                label="Password"
                error="test"
                type="text"
                onChange={handlePassword}
                showError={false}
              />
            </div>
            <p className="mt-4">
              By continuing, you are setting up a Mashup Garage Blog account and
              agree to our <a href="/user-agreement">User Agreement</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
            <button className="button primary-button mt-10">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
