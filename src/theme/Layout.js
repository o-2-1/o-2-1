import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function CustomLayout({ children, ...props }) {
  const { siteConfig } = useDocusaurusContext();

  // Показывать заглушку, если сайт временно недоступен
  const isMaintenanceMode = true; // Поставь false, когда сайт будет доступен

  if (isMaintenanceMode) {
    return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>
        Temporarily out of service
      </h1>
      <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-600)'}}>
        We'll be back!
      </p>
    </div>
    );
  }

  return <Layout {...props}>{children}</Layout>;
}

export default CustomLayout;
