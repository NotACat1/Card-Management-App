import React, { useEffect, useState } from 'react';

import styles from './ScrollToTopButton.module.scss';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop < lastScrollTop && currentScrollTop > 300) {
        setVisible(true);
      } else if (currentScrollTop > lastScrollTop) {
        setVisible(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {visible && (
        <button className={styles.component} onClick={scrollToTop}>
          UP
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
