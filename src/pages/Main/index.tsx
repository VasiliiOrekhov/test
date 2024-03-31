import { Menu } from 'antd';
import { FC } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import s from './main.module.scss';
import { ProfilePage } from 'pages/Profile';
import { MenuPage } from 'pages/Menu';

export const MainPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: 'Home', key: '/' },
          {
            label: 'Profile',
            key: '/profile',
            children: [
              { label: 'Children1', key: '/children1' },
              { label: 'Children2', key: '/children2' },
            ],
          },
          { label: 'LogOut', key: '/logout' },
        ]}></Menu>
      <Content />
    </div>
  );
};

const Content: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/main/menu" element={<MenuPage />} />
        <Route path="/main/profile" element={<ProfilePage />} />
        <Route path="/main/logout" element={<div>LogOut</div>} />
      </Routes>
    </div>
  );
};
