import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LoaderFunction, LoaderFunctionArgs, json } from 'react-router';

import CardDetail from '@components/CardDetail/CardDetail';
import { fetchCardById } from '@store/cards/cardsSlice';
import { store } from '@store/index';
import { IUnsplashImage } from '@type/IUnsplashImage';

interface IFetchCard {
  card: IUnsplashImage;
}

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs): Promise<IFetchCard> => {
  try {
    const { id } = params;
    if (!id) {
      throw new Error('Card ID not found');
    }
    const card = await store.dispatch(fetchCardById(id)).unwrap();
    if (!card) {
      throw new Error('Card not found');
    }
    return { card };
  } catch (error) {
    throw new Error('Failed to fetch card');
  }
};

const CardPage: React.FC = () => {
  const { card } = useLoaderData() as IFetchCard;

  return <CardDetail card={card} />;
};

export default CardPage;
