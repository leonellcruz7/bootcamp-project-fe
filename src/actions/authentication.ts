import { api } from "../api/api";
import { SignupTypes } from "../types/types";
import Swal from "sweetalert2";

export const signup = async ({
  email,
  username,
  password,
  navigate,
}: SignupTypes) => {
  const body = {
    email: email,
    username: username,
    password: password,
  };
  console.log(body);

  try {
    const response = await api.post("/api/v1/users/", body);
    console.log(response);
    Swal.fire("Good Job!", "Sign in successful!", "success");

    navigate("/login");
  } catch (err) {
    console.log(err);
  }
};

export const login = async () => {
  console.log("test");
};
