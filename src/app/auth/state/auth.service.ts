import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: AuthStore) {}

  login(username: string) {
     this.store.update({ username });
  }
}
