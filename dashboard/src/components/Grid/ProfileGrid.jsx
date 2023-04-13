import React from "react";
import { Col, Row } from "antd";
import ProfileCard from "../Card/ProfileCard";
const style = {
  background: "#0092ff",
  padding: "8px 0",
};
function ProfileGrid({ profiles }) {
  return (
    <div>
      <Row gutter={[16, 24]}>
        {profiles &&
          profiles.map((profile) => {
            return (
              <Col xs={24} xl={6} key={profile.id}>
                <ProfileCard profile={profile} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default ProfileGrid;
