import axios from "axios";

export const fetchProfiles = async () => {
  try {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(URL);
    const result = await response.data;
    return result;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
};
