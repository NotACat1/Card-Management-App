import React from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';

import { IUnsplashImage } from '@type/IUnsplashImage';
import LikeButton from '@components/LikeButton/LikeButton';
import DownloadButton from '@components/DownloadButton/DownloadButton';
import styles from './CardDetail.module.scss';

interface IPropsCardDetail {
  card: IUnsplashImage;
}

const CardDetail: React.FC<IPropsCardDetail> = ({ card }) => {
  return (
    <Container>
      <Row className="pb-2">
        <Col className={styles.information}>
          <img
            src={card.user.profile_image.small}
            alt={card.user.name}
            className={styles.information__avatar}
          />
          <div className={styles.information__author}>
            <h1 className={styles.information__name}>{card.user.name}</h1>
            {card.user.bio && (
              <p className={styles.information__bio}>{card.user.bio}</p>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            src={card.urls.full}
            alt={card.description || 'Unsplash Image'}
            className={styles.image}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CardDetail;
