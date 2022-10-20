import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
