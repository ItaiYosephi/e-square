import { SearchQuery } from './search.query';
import { inject, InjectionToken } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';

export const SEARCH_PAGINATOR = new InjectionToken('SEARCH_PAGINATOR', {
  providedIn: 'root',
  factory: () => {
    const searchQuery = inject(SearchQuery);
    return new PaginatorPlugin(searchQuery).withControls().withRange();
  }
});
