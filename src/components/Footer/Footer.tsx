import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';
import { ReactComponent as TelegramIcon } from '@assets/icons/telegram.svg';
import { contacts } from '@data/contacts';
import { formatPhoneNumber } from './Footer.utils';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.component}>
      <Container>
        <Row>
          <Col className={styles.component__col} md={4}>
            <h3 className={styles.component__title}>Contact Us</h3>
            <ul className={styles.contacts}>
              <li className={styles.contacts__item}>
                Phone:{' '}
                <a
                  href={`tel:${contacts.phone}`}
                  className={styles.contacts__link}
                >
                  <span>{formatPhoneNumber(contacts.phone)}</span>
                </a>
              </li>
              <li className={styles.contacts__item}>
                Email:{' '}
                <a
                  href={`mailto:${contacts.email}`}
                  className={styles.contacts__link}
                >
                  <span>{contacts.email}</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col className={styles.component__col}>
            <h3 className={styles.component__title}>Follow Us</h3>
            <ul className={styles.contacts}>
              <li className={styles.contacts__item}>
                <a
                  href={contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contacts__link}
                >
                  <GithubIcon />
                  <span>GitHub</span>
                </a>
              </li>
              <li className={styles.contacts__item}>
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contacts__link}
                >
                  <TelegramIcon />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
