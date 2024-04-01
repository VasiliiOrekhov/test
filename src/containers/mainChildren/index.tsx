import { Menu } from 'antd';
import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import s from './main.module.scss';

export const MainChildren: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: 'Child1', key: '/main/children1/ch1' },
          { label: 'Child2', key: '/main/children1/ch2' },
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
