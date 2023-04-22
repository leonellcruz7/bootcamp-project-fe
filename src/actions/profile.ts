import { api } from "../api/api";

export const getProfile = async (username: any, setProfile: any) => {
  try {
    const response = await api.get(`/api/v1/users/${username}`);
    // console.log(response.data.data);

    setProfile(response.data.data);
  } catch (err) {
    console.log(err);
  }
};
