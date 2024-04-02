import { Menu } from 'antd';
import { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import s from './main.module.scss';
import png from './../../assets/592238.png';

export const MainPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <img src={png} className={s.png} alt="Логотип" />
        <Menu
          className={s.menu}
          onClick={({ key }) => {
            navigate(key);
          }}
          mode="horizontal"
          // selectedKeys={[selectedKey ? selectedKey : "/dashboard"]}
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            { label: 'Children1', key: '/main/children1' },
            { label: 'Children2', key: '/main/children2' },
          ]}></Menu>
      </div>

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
