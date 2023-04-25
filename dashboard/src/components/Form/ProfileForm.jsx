import React from "react";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { editProfile } from "../../features/profileSlice";
function ProfileForm({ form, setIsModalOpen, profile }) {
  // console.log(profile);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(editProfile({ values: values, id: profile.id }));
    setIsModalOpen(false);
    // form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {" "}
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          // eslint-disable-next-line
          ["name"]: profile.name,
          // eslint-disable-next-line
          ["email"]: profile.email,
          // eslint-disable-next-line
          ["phone"]: profile.phone,
          // eslint-disable-next-line
          ["website"]: profile.website,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone no.!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
              message: "Please input your website!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        ></Form.Item>
      </Form>
    </div>
  );
}

export default ProfileForm;
