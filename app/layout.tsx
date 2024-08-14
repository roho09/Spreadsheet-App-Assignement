// src/app/layout.tsx

import { ReactNode } from 'react';
import '../styles/globals.css'; // Correct path to global styles


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
