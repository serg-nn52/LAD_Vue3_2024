import type { IUser } from '@/types/users.types';

export interface IContentEmits {
  (e: 'sell', user: IUser): void;
}
