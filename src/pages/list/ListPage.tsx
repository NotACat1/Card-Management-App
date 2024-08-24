import React from 'react';
import { json } from 'react-router';

import CardList from '@components/CardList/CardList';
import { fetchCards } from '@store/cards/cardsSlice';
import { store } from '@store/index';

export const loader = async () => {
  try {
    await store.dispatch(fetchCards(1));
    return json({ cards: store.getState().cards.cards });
  } catch (error) {
    throw new Response('Failed to fetch cards', { status: 500 });
  }
};

const ListPage: React.FC = () => {
  return <CardList />;
};

export default ListPage;
