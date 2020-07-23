import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchState, SearchStore } from './search.store';

@Injectable({ providedIn: 'root' })
export class SearchQuery extends QueryEntity<SearchState> {
  constructor(protected store: SearchStore) {
    super(store);
  }
}
