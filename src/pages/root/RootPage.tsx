import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher';
import ScrollToTopButton from '@components/ScrollToTopButton/ScrollToTopButton';
import styles from './RootPage.module.scss';

const RootPage: React.FC = () => {
  return (
    <div className={styles.component}>
      <Header />
      <main className={`pt-5 ${styles.component__content}`}>
        <Outlet />
        <div className={styles.component__buttons}>
          <ThemeSwitcher />
          <ScrollToTopButton />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
