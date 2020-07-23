import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../state/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private authsService: AuthService) {}

  get usernameCtrl(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  login(): void {
    if (this.userForm.invalid) {
      return;
    }
    this.authsService.login(this.userForm.value.username);
    this.router.navigate(['search']);
  }
}
