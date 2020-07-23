import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from './../../models/book';

export interface WishlistState extends EntityState<Book> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wishlist' })
export class WihslistStore extends EntityStore<WishlistState> {
  constructor() {
    super({loading: false});
  }
}
