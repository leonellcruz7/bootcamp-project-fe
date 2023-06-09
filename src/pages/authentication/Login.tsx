import React, { useState } from "react";
import Input from "../../components/assets/Input";
import { login } from "../../actions/authentication";
import Loader from "../../components/assets/Loader";
import Swal from "sweetalert2";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btnLabel, setBtnLabel] = useState<any>("Login");
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    if (username && password) {
      setBtnLabel(<Loader />);
      login({ username, password });
    } else {
      Swal.fire("Error!", "Please complete the form!", "error");
    }
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
              {btnLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
