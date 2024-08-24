import { IUnsplashUser } from '@type/IUnsplashUser';

export interface IUnsplashImage {
  id: string;
  description: string | null;
  urls: {
    full: string;
  };
  links: {
    download: string;
  };
  likes: number;
  liked_by_user: boolean;
  user: IUnsplashUser;
}
