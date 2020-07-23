import { StoreConfig, Store } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface AuthState {
  username: string;
}

@StoreConfig({ name: 'auth' })
@Injectable({ providedIn: 'root' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super({ username: null });
  }
}
