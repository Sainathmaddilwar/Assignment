import React from "react";
import { useState } from "react";
import styles from "../Card/ProfileCard.module.css";
import {
  EditOutlined,
  HeartOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { Modal, Card, Form } from "antd";
import ProfileForm from "../Form/ProfileForm";
import { useDispatch } from "react-redux";
// import { setProfiles } from "../../redux/actions/ProfileActions";
import { deleteProfile } from "../../features/profileSlice";
const { Meta } = Card;
const ProfileCard = ({ profile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // console.log(profile);
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

  const handleDelete = () => {
    console.log("delete", profile.id);
    // const filteredData = [...profiles].filter(
    //   (element) => profile.id !== element.id
    // );
    // // console.log(filteredData);
    // dispatch(setProfiles(filteredData));
    // console.log(profiles);

    dispatch(deleteProfile(profile.id));
  };
  return (
    <div>
      {profile && (
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
              <DeleteFilled key="delete" onClick={handleDelete} />,
            ]}
          >
            <div>
              <Meta title={profile.name} />
            </div>
            <div className={styles.card_decription}>
              <MailOutlined />
              <Meta description={profile.website} />
            </div>

            <div className={styles.card_decription}>
              <PhoneOutlined />
              <Meta description={profile.phone} />
            </div>
            <div className={styles.card_decription}>
              <GlobalOutlined />
              <Meta description={profile.email} />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
