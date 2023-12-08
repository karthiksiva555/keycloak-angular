import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-callback',
  templateUrl: './signin-callback.component.html',
  styleUrls: ['./signin-callback.component.css']
})
export class SigninCallbackComponent implements OnInit {

  constructor(private readonly router: Router, private readonly authService: AuthService) { }

  async ngOnInit() {
    await this.authService.userManager.signinCallback();
    this.router.navigate(['']);
  }

}
