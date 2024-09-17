import React from 'react';
import { Menu } from '../components/Menu';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu/>

      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;