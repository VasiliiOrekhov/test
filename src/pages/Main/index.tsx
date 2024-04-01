import { Menu } from 'antd';
import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import s from './main.module.scss';

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
          { label: 'Children1', key: '/main/children1' },
          { label: 'Children2', key: '/main/children2' },
        ]}></Menu>
      <Content />
    </div>
  );
};

const Content: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
