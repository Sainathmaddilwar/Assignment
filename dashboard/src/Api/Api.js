import axios from "axios";

export const fetchProfiles = async () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const response = await axios.get(URL);
  const result = await response.data;
  return result;
};

export const fetchProfileAvtars = async (username) => {
  const URL = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
  const response = await axios.get(URL);
  const result = await response.data;
  return result;
};
