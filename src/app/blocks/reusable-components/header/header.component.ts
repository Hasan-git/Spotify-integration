import { AuthService } from '../../core/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() backurl: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }


  // ---------------------------------------------
  // Public methods
  // -----------------------------------------------
  logout() { this.authService.logout(); }


}
