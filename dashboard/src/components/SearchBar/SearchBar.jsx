import { Input, Space } from "antd";
import styles from "../SearchBar/SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setProfiles } from "../../features/profileSlice";
import { fetchProfiles } from "../../Api/Api";
const { Search } = Input;

const SearchBar = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.allProfiles.profiles);

  const onSearch = (value) => {
    // console.log(profiles);
    if (value === "") {
      fetchProfiles().then((data) => {
        dispatch(setProfiles(data));
      });
    }
    const filteredData = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(value)
    );
    if (filteredData.length === 0) {
      alert("user not found");
    } else {
      dispatch(setProfiles(filteredData));
    }
  };
  return (
    <div className={styles.searchBar}>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{
            width: 300,
            padding: "20px 20px",
          }}
        />
      </Space>
    </div>
  );
};
export default SearchBar;
