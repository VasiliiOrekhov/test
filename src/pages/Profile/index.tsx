import { Button, Form, Input } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TProfile } from 'store/services/profileService/models';
import { useChangeUserMutation } from 'store/services/profileService/profileApiService';
import { TUser } from 'store/services/userService/models';
import { useGetUserQuery } from 'store/services/userService/userApiService';
import { profileInputs } from './constants';

export const Profile: React.FC = () => {
  const { data } = useGetUserQuery();
  const navigate = useNavigate();
  const [updateProfile] = useChangeUserMutation();

  const onFinish = async (data: TProfile) => {
    console.log(data);
    await updateProfile(data);
  };

  if (!data) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1>ProfilePage</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        {profileInputs.map((el) => (
          <Form.Item
            label={el.name}
            name={el.name}
            rules={el.rules}
            key={el.name}
            initialValue={data![el.name as keyof TUser] ? data![el.name as keyof TUser] : ''}>
            <Input />
          </Form.Item>
        ))}

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <Button type="primary" onClick={() => navigate('/menu')}>
        Menu
      </Button>
    </div>
  );
};
