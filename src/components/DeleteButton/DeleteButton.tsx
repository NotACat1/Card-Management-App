import React from 'react';

import { Button } from 'react-bootstrap';
import { useAppDispatch } from '@store/index';
import { deleteCard } from '@store/cards/cardsSlice';
import { ReactComponent as DeleteIcon } from '@assets/icons/trash.svg';
import styles from './DeleteButton.module.scss';

interface IDeleteButtonProps {
  cardId: string;
}

const DeleteButton: React.FC<IDeleteButtonProps> = ({ cardId }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteCard(cardId));
  };

  return (
    <Button variant="link" className={styles.component} onClick={handleDelete}>
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
