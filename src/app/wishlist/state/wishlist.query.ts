import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { BookID } from './../../models/book';
import { WihslistStore, WishlistState } from './wishlist.store';

@Injectable({ providedIn: 'root' })
export class WishlistQuery extends QueryEntity<WishlistState> {
  constructor(protected store: WihslistStore) {
    super(store);
  }

  selectIsWishlisted(id: BookID) {
    return this.selectAll({ asObject: true }).pipe(
      map((booksMap) => !!booksMap[id])
    );
  }
}
