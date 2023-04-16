import React from "react";
import { Col, Row } from "antd";
import ProfileCard from "../Card/ProfileCard";
import { useSelector } from "react-redux";

function ProfileGrid() {
  const profiles = useSelector((state) => state.allProfiles.profiles);
  // console.log(profiles);
  return (
    <div>
      <Row gutter={[16, 24]}>
        {profiles &&
          profiles.map((profile) => {
            return (
              <Col xs={24} xl={6} md={8} sm={10} key={profile.id}>
                <ProfileCard profile={profile} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default ProfileGrid;
