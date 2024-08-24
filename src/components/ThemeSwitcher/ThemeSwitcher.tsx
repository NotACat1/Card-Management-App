import React, { useState, useEffect } from 'react';

import { ReactComponent as DarkThemeIcon } from '@assets/icons/sun.svg';
import { ReactComponent as LightThemeIcon } from '@assets/icons/moon-stars.svg';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    () => document.body.classList.contains('dark-theme') || false,
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      setIsDarkTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className={styles.component}>
      {isDarkTheme ? (
        <DarkThemeIcon className={styles.component__icon} />
      ) : (
        <LightThemeIcon className={styles.component__icon} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
