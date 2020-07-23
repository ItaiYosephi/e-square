import { Injectable } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { mapTo, tap, auditTime, delay } from 'rxjs/operators';
import { Book, BookID } from './../../models/book';
import { WihslistStore } from './wishlist.store';
import { setLoading } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  constructor(private store: WihslistStore) {}

  add(book: Book): Observable<Book> {
    return timer(300).pipe(
      setLoading(this.store),
      mapTo(book),
      tap(() => {
        this.store.add(book);
      })
    );
  }

  remove(bookId: BookID): Observable<boolean> {
    return timer(300).pipe(
      setLoading(this.store),
      mapTo(true),
      tap(() => {
        this.store.remove(bookId);
      })
    );
  }
}
