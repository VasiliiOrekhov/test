import React from 'react';

import { Button, Form, type FormProps, Input } from 'antd';
import { formRules } from 'utils/formRules';
import { useNavigate } from 'react-router-dom';
import { useSingInMutation } from 'store/services/authService/authService';

type FieldType = {
  login: string;
  password: string;
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [login, { error: loginError }] = useSingInMutation();
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const response = await login(values).unwrap();
      localStorage.setItem('access', response.access);
      localStorage.setItem('refresh', response.refresh);
      navigate('/menu');
    } catch (error) {
      console.log(loginError);
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

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
