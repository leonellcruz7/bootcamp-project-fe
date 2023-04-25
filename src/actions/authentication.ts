import Cookies from "universal-cookie";
import { api } from "../api/api";
import { LoginTypes, SignupTypes } from "../types/types";
import Swal from "sweetalert2";

const cookie = new Cookies();

export const signup = async ({
  email,
  username,
  password,
  navigate,
}: SignupTypes) => {
  const body = {
    user: {
      firstname: "",
      lastname: "",
      email: email,
      username: username,
      password: password,
    },
  };
  console.log(body);

  try {
    const response = await api.post("/api/v1/users/", body);
    console.log(response);
    Swal.fire("Good Job!", "Sign up successful!", "success");

    navigate("/login");
  } catch (err: any) {
    console.log(err.response.data.error);
    if ((err.response.data.error = "email already exist")) {
      Swal.fire("Sorry!", "Email already exist!", "error");
    }
    if ((err.response.data.error = "username already exist")) {
      Swal.fire("Sorry!", "Username already exist!", "error");
    }
  }
};

export const login = async ({ username, password }: LoginTypes) => {
  const body = {
    username: username,
    password: password,
  };
  try {
    const response = await api.post("/api/v1/users/login", body);
    const user = {
      user_id: response.data.user.id,
      username: response.data.user.username,
      email: response.data.user.email.toString(),
    };
    console.log(response);
    cookie.set("user_id", user.user_id, { path: "/" });
    cookie.set("username", user.username, { path: "/" });
    cookie.set("email", user.email, { path: "/" });
    cookie.set("access_token", response.data.token, { path: "/" });
    Swal.fire("Good Job!", "Sign in successful!", "success");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  } catch (err: any) {
    console.log(err.response.data.error);
    if (err.response.data.error === "user does not exist") {
      Swal.fire("Sorry!", "User does not exist!", "error");
    }
    if (err.response.data.error === "incorrect password") {
      Swal.fire("Sorry!", "Please enter correct password!", "error");
    }
  }
};

export const logout = () => {
  cookie.remove("username");
  cookie.remove("user_id");
  cookie.remove("email");
  cookie.remove("access_token");
  window.location.href = "/login";
};
