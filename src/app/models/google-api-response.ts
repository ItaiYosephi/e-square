import { Book } from './book';

export interface GoogleApiResponse {
  totalItems: number;
  items?: Book[];
}
