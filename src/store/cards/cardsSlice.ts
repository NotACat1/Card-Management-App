import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchCards as fetchCardsAPI,
  fetchCardById as fetchCardByIdAPI,
} from '@services/unsplashService';
import { IUnsplashImage } from '@type/IUnsplashImage';

interface CardsState {
  cards: IUnsplashImage[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
}

const initialState: CardsState = {
  cards: [],
  status: 'idle',
  error: null,
  page: 1,
};

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  async (page: number) => {
    const response = await fetchCardsAPI(page);
    return { cards: response, page };
  },
);

export const fetchCardById = createAsyncThunk(
  'cards/fetchCardById',
  async (id: string) => {
    const response = await fetchCardByIdAPI(id);
    return response;
  },
);

export const likeCard = createAsyncThunk(
  'cards/likeCard',
  async (id: string) => {
    return id;
  },
);

export const unlikeCard = createAsyncThunk(
  'cards/unlikeCard',
  async (id: string) => {
    return id;
  },
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (id: string) => {
    return id;
  },
);

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.page = action.payload.page;
        state.cards = [...state.cards, ...action.payload.cards];
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch cards';
      })
      .addCase(likeCard.fulfilled, (state, action) => {
        const id = action.payload;
        const card = state.cards.find((c) => c.id === id);
        console.log(id);
        console.log(card);
        if (card) {
          card.liked_by_user = true;
        }
      })
      .addCase(unlikeCard.fulfilled, (state, action) => {
        const id = action.payload;
        const card = state.cards.find((c) => c.id === id);
        if (card) {
          card.liked_by_user = false;
        }
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        const id = action.payload;
        state.cards = state.cards.filter((card) => card.id !== id);
      });
  },
});

export default cardsSlice.reducer;
