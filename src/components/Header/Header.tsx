import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { ReactComponent as LogoIcon } from '@assets/cat.svg';
import { ReactComponent as LeftIcon } from '@assets/icons/arrow-left-circle.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className={styles.component}>
      <Container>
        <Row className="align-items-center">
          <Col>
            <LogoIcon
              onClick={handleHomeClick}
              className={styles.component__logo}
            />
          </Col>
          {!isHomePage && (
            <Col className="d-flex flex-row-reverse">
              <Button
                variant="primary"
                onClick={handleBackClick}
                className={styles.component__btn}
              >
                <LeftIcon />
                <span>Back</span>
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
