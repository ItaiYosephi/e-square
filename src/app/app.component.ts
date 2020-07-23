import { Component } from '@angular/core';
import { AuthQuery } from './auth/state/auth.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn$ = this.authQuery.isLoggedIn$;
  username$ = this.authQuery.username$;
  title = 'e-square';
  constructor(private authQuery: AuthQuery) {}
}
