import React from "react";
import styles from "../Card/ProfileCard.module.css";
import {
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.card}>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="example"
            src={`https://avatars.dicebear.com/v2/avataaars/${profile.username}.svg?options[mood][]=happy`}
            style={{ height: "160px" }}
          />
        }
        actions={[
          <HeartOutlined key="like" onClick={(e) => console.log(e.target)} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div>
          <Meta title={profile.name} />
        </div>
        <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
          <MailOutlined />
          <Meta description={profile.website} />
        </div>

        <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
          <PhoneOutlined />
          <Meta description={profile.phone} />
        </div>
        <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
          <GlobalOutlined />
          <Meta description={profile.email} />
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
