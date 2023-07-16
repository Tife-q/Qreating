import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';

const Layout = (WrappedComponent: React.ComponentType) => {
  const ComponentWithLayout = () => (
    <div>
      <Header />
      <div className="content">
        <WrappedComponent />
      </div>
      <Footer />
    </div>
  );

  return ComponentWithLayout;
};

export default Layout;
