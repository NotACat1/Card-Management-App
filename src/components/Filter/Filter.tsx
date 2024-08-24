import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import { TFilterCards } from '@type/TFilterCards';
import styles from './Filter.module.scss';

interface IFilters {
  filter: TFilterCards;
  onChange: (filter: TFilterCards) => void;
}

const Filter: React.FC<IFilters> = ({ filter, onChange }) => {
  return (
    <ButtonGroup className={styles.component}>
      <Button
        variant="primary"
        onClick={() => onChange('all')}
        className={`${styles.component__button} ${filter === 'all' && styles.component__button_active}`}
      >
        All Cards
      </Button>
      <Button
        variant="primary"
        onClick={() => onChange('liked')}
        className={`${styles.component__button} ${filter === 'liked' && styles.component__button_active}`}
      >
        Liked Cards
      </Button>
    </ButtonGroup>
  );
};

export default Filter;
