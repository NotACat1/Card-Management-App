import React from 'react';

import { Button } from 'react-bootstrap';
import { likeCard, unlikeCard } from '@store/cards/cardsSlice';
import { useAppDispatch } from '@store/index';
import { ReactComponent as UnLikeIcon } from '@assets/icons/heart.svg';
import { ReactComponent as LikeIcon } from '@assets/icons/heart-fill.svg';
import styles from './LikeButton.module.scss';

interface ILikeButtonProps {
  likedByUser: boolean;
  cardId: string;
}

const LikeButton: React.FC<ILikeButtonProps> = ({ likedByUser, cardId }) => {
  const dispatch = useAppDispatch();

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedByUser) {
      dispatch(unlikeCard(cardId));
    } else {
      dispatch(likeCard(cardId));
    }
  };

  return (
    <Button variant="link" className={styles.component} onClick={handleLike}>
      {likedByUser ? <LikeIcon /> : <UnLikeIcon />}
    </Button>
  );
};

export default LikeButton;
