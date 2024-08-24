import axios from 'axios';

import { fetchCards, fetchCardById } from './unsplashService';
import { IUnsplashImage } from '@type/IUnsplashImage';
import { UNSPLASH_URL } from '@data/constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('unsplashService', () => {
  const mockImageData: IUnsplashImage = {
    id: 'RtOINPihAeQ',
    description: null,
    urls: {
      full: 'https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDU1NTd8MHwxfGFsbHx8fHx8fHx8fDE3MjQ1MTY5Njh8&ixlib=rb-4.0.3&q=85',
    },
    links: {
      download:
        'https://unsplash.com/photos/RtOINPihAeQ/download?ixid=M3w2NDU1NTd8MHwxfGFsbHx8fHx8fHx8fDE3MjQ1MTY5Njh8',
    },
    user: {
      id: 'eySMK9KwmJU',
      name: 'Samsung Memory',
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1602741027167-c4d707fcfc85image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
      },
      bio: 'Memory for every endeavor – get fast storage solutions that work seamlessly with your devices.',
    },
    likes: 17,
    liked_by_user: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchCards', () => {
    it('should fetch and return popular cards successfully', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: [mockImageData] });

      const result = await fetchCards(1);

      expect(mockedAxios.get).toHaveBeenCalledWith(`${UNSPLASH_URL}photos`, {
        params: { page: 1, per_page: 10, order_by: 'popular' },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      });
      expect(result).toEqual([mockImageData]);
    });

    it('should throw an error if fetching cards fails', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

      await expect(fetchCards(1)).rejects.toThrow('Network Error');
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchCardById', () => {
    it('should fetch and return card by ID successfully', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockImageData });

      const result = await fetchCardById('RtOINPihAeQ');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        `${UNSPLASH_URL}photos/RtOINPihAeQ`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
          },
        },
      );
      expect(result).toEqual(mockImageData);
    });

    it('should throw an error if fetching card by ID fails', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

      await expect(fetchCardById('test-id')).rejects.toThrow('Network Error');
      expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
  });
});
