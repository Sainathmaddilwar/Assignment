import React from "react";
import { Form, Input } from "antd";
function ProfileForm({ form, setIsModalOpen, profile }) {
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
    form.resetFields();
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
          remember: true,
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
          <Input defaultValue={profile.name} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
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
          <Input defaultValue={profile.email} />
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
          <Input defaultValue={profile.phone} />
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
          <Input defaultValue={profile.website} />
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
