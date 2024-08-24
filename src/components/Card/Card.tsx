import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card as BootstrapCard } from 'react-bootstrap';

import { IUnsplashImage } from '@type/IUnsplashImage';
import LikeButton from '@components/LikeButton/LikeButton';
import DownloadButton from '@components/DownloadButton/DownloadButton';
import DeleteButton from '@components/DeleteButton/DeleteButton';
import styles from './Card.module.scss';

interface CardProps {
  card: IUnsplashImage;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/card/${card.id}`);
  };

  return (
    <BootstrapCard
      className={`h-100 ${styles.component}`}
      onClick={handleCardClick}
    >
      <BootstrapCard.Img
        variant="top"
        src={card.urls.full}
        alt={card.description || 'Unsplash Image'}
        className={styles.component__image}
      />
      <BootstrapCard.Body>
        <div className={styles.component__information}>
          <img
            src={card.user.profile_image.small}
            alt={card.user.name}
            className={styles.component__avatar}
          />
          <div className={styles.component__infoauthor}>
            <h2 className={styles.component__author}>{card.user.name}</h2>
            {card.user.bio && (
              <p className={styles.component__description}>{card.user.bio}</p>
            )}
          </div>
        </div>
        <div className={styles.component__buttons}>
          <LikeButton cardId={card.id} likedByUser={card.liked_by_user} />
          <DownloadButton
            downloadUrl={card.links.download}
            fileName={card.description ? card.description : 'Unsplash Image'}
          />
          <DeleteButton cardId={card.id} />
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
