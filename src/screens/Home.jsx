import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: 'Party of Two',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Guides',
    key: 'book',
    icon: <BookOutlined />,
  },
  {
    label: 'Restaurants',
    key: 'app',
    icon: <AppstoreOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://www.instagram.com/partyxtwo/" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    ),
    key: 'instagram',
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;