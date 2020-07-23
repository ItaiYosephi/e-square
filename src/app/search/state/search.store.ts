import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from './../../models/book';

export interface SearchState extends EntityState<Book> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'search' })
export class SearchStore extends EntityStore<SearchState> {
  constructor() {
    super();
  }
}
