import React from "react";
import { useState } from "react";
import styles from "../Card/ProfileCard.module.css";
import {
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { Modal, Card, Form } from "antd";
import ProfileForm from "../Form/ProfileForm";
const { Meta } = Card;
const ProfileCard = ({ profile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };
  const changeColor = () => {
    setIsActive((preve) => !preve);
  };
  return (
    <div className={styles.card}>
      <Modal
        title="Form"
        open={isModalOpen}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <ProfileForm
          form={form}
          setIsModalOpen={setIsModalOpen}
          profile={profile}
        />
      </Modal>
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
          isActive ? (
            <HeartOutlined
              key="like"
              onClick={changeColor}
              style={{ color: "red" }}
            />
          ) : (
            <HeartFilled
              key="like"
              onClick={changeColor}
              style={{ color: "red" }}
            />
          ),

          <EditOutlined key="edit" onClick={showModal} />,
          <DeleteFilled key="delete" />,
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
