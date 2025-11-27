import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

export default function MaintenancePage() {
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
