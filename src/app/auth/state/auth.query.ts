import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  username$ = this.select('username');
  isLoggedIn$ = this.username$.pipe(map(Boolean));

  constructor(protected store: AuthStore) {
    super(store);
  }

  getIsLoggedIn(): boolean {
    return !!this.getValue().username;
  }
}
