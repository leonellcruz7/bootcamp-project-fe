import React, { useState } from "react";
import Input from "../../components/assets/Input";
import MG from "../../assets/images/MGBackground.svg";
import { login } from "../../actions/authentication";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    login({ username, password });
  };
  return (
    <div className="flex">
      <div className="w-full h-[100vh] overflow-hidden bg-mg bg-cover">
        {/* <img className="w-full" src={MG} alt="" /> */}
      </div>
      <div className="w-full h-[100vh] bg-white p-10">
        <div className="text-right">
          <p className="text-sm font-light">
            New to Mashup Garage Blogs?{" "}
            <a href="/sign-up" className="text-sm">
              Sign up
            </a>
          </p>
        </div>
        <div className="h-full flex justify-center items-center">
          <div className="max-w-[360px] w-full flex flex-col">
            <p className="text-lg font-medium">Login</p>
            <div className="flex flex-col gap-6 mt-6">
              <Input
                value={username}
                placeholder=""
                label="Username"
                error="test"
                type="text"
                onChange={handleUsername}
                showError={false}
              />
              <Input
                value={password}
                placeholder=""
                label="Password"
                error="test"
                type="password"
                onChange={handlePassword}
                showError={false}
              />
            </div>
            <p className="mt-4">
              <a href="/forgot-password">Forgot your password?</a>
            </p>
            <button
              className="button primary-button mt-10"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
