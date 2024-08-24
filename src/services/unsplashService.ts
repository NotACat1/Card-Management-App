import axios from 'axios';

import { IUnsplashImage } from '@type/IUnsplashImage';
import { UNSPLASH_URL as API_URL } from '@data/constants';

const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

// Функция для получения популярных карточек
export const fetchCards = async (
  page: number,
  perPage = 10,
): Promise<IUnsplashImage[]> => {
  try {
    const response = await axios.get(`${API_URL}photos`, {
      params: { page, per_page: perPage, order_by: 'popular' },
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

// Функция для получения информации о конкретной карточке по ID
export const fetchCardById = async (id: string): Promise<IUnsplashImage> => {
  try {
    const response = await axios.get(`${API_URL}photos/${id}`, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching card by ID:', error);
    throw error;
  }
};
