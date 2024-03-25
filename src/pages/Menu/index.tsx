import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery, useLogoutMutation } from 'store/services/userService/userApiService';

export const MenuPage: React.FC = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  useGetUserQuery();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>menupage</h1>
      <Button onClick={handleLogout}>logout</Button>
      <Button onClick={() => navigate('/profile')}>to Profile</Button>
    </div>
  );
};
