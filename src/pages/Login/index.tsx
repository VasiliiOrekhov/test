import React, { useState } from 'react';

import { Button, Form, type FormProps, Input } from 'antd';
import { formRules } from 'utils/formRules';
import { useSingInMutation } from 'store/services/userService/userApiService';
import { useNavigate } from 'react-router-dom';

type FieldType = {
  login: string;
  password: string;
};

export const Login: React.FC = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const [login] = useSingInMutation();
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      await login(values).unwrap();
      navigate('/menu');
    } catch (error) {
      setError(JSON.parse(error.data).reason);
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item<FieldType>
        label="Username"
        name="login"
        rules={[formRules.required, formRules.login]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[formRules.required, formRules.password]}>
        <Input.Password />
      </Form.Item>
      {error && <h5>{error}</h5>}

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
