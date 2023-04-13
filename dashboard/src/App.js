import React, { useEffect, useState } from "react";
import ProfileGrid from "./components/Grid/ProfileGrid";
import { fetchProfiles } from "./Api/Api";
import Loader from "./components/Loader/Loader";
export default function App() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetchProfiles().then((data) => {
      setProfiles(data);
    });
  }, []);
  return (
    <div>
      {profiles.length === 0 && <Loader />}
      <ProfileGrid profiles={profiles} />
    </div>
  );
}
