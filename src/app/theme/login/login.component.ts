import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../blocks/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  // ------------------------------------------------------
  //  Public methods
  // ------------------------------------------------------

  login() { this.authService.login(); }

}
