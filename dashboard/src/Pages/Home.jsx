import React from "react";
import { useEffect } from "react";
import { fetchProfiles } from "../Api/Api";
import Loader from "../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setProfiles } from "../redux/actions/ProfileActions";

import ProfileGrid from "../components/Grid/ProfileGrid";
import SearchBar from "../components/SearchBar/SearchBar";
function Home() {
  const profiles = useSelector((state) => state.allProfiles.profiles);
  const dispatch = useDispatch();

  //   const [profiles, setProfilesx] = useState([]);
  useEffect(() => {
    fetchProfiles().then((data) => {
      //   setProfilesx(data);
      dispatch(setProfiles(data));
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {profiles.length === 0 && <Loader />}
      <SearchBar />
      <ProfileGrid />
    </div>
  );
}

export default Home;
